#!/bin/bash
set -e

export DB_HOST='${mysql_host}'
export DB_PORT='${mysql_port}'
export DB_USER='${mysql_user}'
export DB_PASSWORD='${mysql_password}'
export DB_SCHEMA='${mysql_db_schema}'
export REPOSITORY_URL='${repository_url}'
export EMAIL_NAME='${email_name}'
export EMAIL_PASSWORD='${email_password}'

# https://dev.to/hayleycodes/deploying-a-node-js-site-to-vultr-j8d
# https://docs.vultr.com/how-to-generate-ssl-certificates-using-certbot-on-a-vultr-cloud-server

# Dependencies
sudo apt-get update
sudo apt-get install -y nginx

# Dependencies for puppeteer
sudo apt-get install -y libxss1
sudo apt-get install -y libasound2

# node 14
sudo apt-get install -y npm
sudo npm install -g n
sudo n 14

# Firewall
sudo ufw allow http
sudo ufw allow https

sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot

sudo mkdir -p /var/www/app
sudo chown $(whoami):$(whoami) /var/www/app
cd /var/www/app
git clone $REPOSITORY_URL .
npm ci
npm run build &>build.log
cd srv
npm run migrate
npm run start

DEVICE="/dev/vdb"
PARTITION="$${DEVICE}1"

# Check if the filesystem already exists on the partition
# https://docs.vultr.com/block-storage
if ! lsblk -fno FSTYPE $PARTITION | grep -q ext4; then
    echo "No ext4 filesystem detected on $PARTITION. Formatting..."

    # Create a new disk label using parted
    sudo parted -s $DEVICE mklabel gpt
    # Make a primary partition to fill the entire disk
    sudo parted -s $DEVICE unit mib mkpart primary 0% 100%

    # Create an EXT4 filesystem on the primary partition and format it
    sudo mkfs.ext4 $PARTITION
fi

BLOCKSTORAGE_PATH="/mnt/blockstorage"

# Make a mount point for block storage
sudo mkdir -p $BLOCKSTORAGE_PATH

# Retrieve UUID for the created partition
UUID=$(sudo blkid -s UUID -o value $PARTITION)

# Add a mount entry to /etc/fstab to automatically mount the block storage at each reboot
echo "UUID=$UUID $BLOCKSTORAGE_PATH ext4 defaults,noatime,nofail 0 0" | sudo tee -a /etc/fstab

# Mount the block storage
sudo mount $BLOCKSTORAGE_PATH

# Real certificate will overwrite self-signed
# Will retry until the certificate is retrieved, which depends on how long the vultr dns takes to propagate
attempt=1
until sudo certbot certonly \
    --nginx \
    -d steeringcolumnsgalore.com \
    -d www.steeringcolumnsgalore.com \
    -m $EMAIL_NAME \
    --config-dir $BLOCKSTORAGE_PATH \
    --agree-tos \
    --non-interactive \
    --staging --force-renewal; do
    seconds=$((2 ** attempt))
    echo "Certificate retrieval failed, retrying in $seconds seconds..."
    sleep $seconds
    attempt=$((attempt + 1))
done

cat <<'EOF' >/etc/nginx/sites-available/default
${nginx_config}
EOF

nginx -t && systemctl restart nginx
