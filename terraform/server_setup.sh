#!/bin/bash
set -e

export DB_HOST=${mysql_host}
export DB_PORT=${mysql_port}
export DB_USER=${mysql_user}
export DB_PASSWORD=${mysql_password}
export DB_SCHEMA=${mysql_db_schema}
export REPOSITORY_URL=${repository_url}
export EMAIL_NAME=${email_name}
export EMAIL_PASSWORD=${email_password}

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
npm run build &> build.log
cd srv
npm run migrate
npm run start

# Fallback to invalid certificate
sudo certbot certonly --nginx -d steeringcolumnsgalore.com -d www.steeringcolumnsgalore.com -m $EMAIL_NAME --agree-tos --non-interactive --test-cert

# Real certificate will overwrite self-signed
# Will retry until the certificate is retrieved, which depends on how long the vultr dns takes to propagate
until sudo certbot certonly --nginx -d steeringcolumnsgalore.com -d www.steeringcolumnsgalore.com -m $EMAIL_NAME --agree-tos --non-interactive; do
  echo "Certificate retrieval failed, retrying in 5 seconds..."
  sleep 5
done

cat << 'EOF' > /etc/nginx/sites-available/default 
${nginx_config} 
EOF