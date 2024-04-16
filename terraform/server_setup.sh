#!/bin/bash
set -e

export DB_HOST=${mysql_host}
export DB_PORT=${mysql_port}
export DB_USER=${mysql_user}
export DB_PASSWORD=${mysql_password}
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

cat << 'EOF' > /etc/nginx/sites-available/default 
${nginx_config} 
EOF

sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
sudo certbot --nginx -d steeringcolumnsgalore.com -d www.steeringcolumnsgalore.com -m $EMAIL_NAME --agree-tos --non-interactive || {
    echo "Certbot failed, creating a self-signed certificate instead."
    # Fallback to self-signed certificate
    sudo mkdir -p /etc/letsencrypt/self-signed
    sudo openssl req -nodes -x509 -newkey rsa:2048 -keyout /etc/letsencrypt/self-signed/privkey.pem -out /etc/letsencrypt/self-signed/fullchain.pem -days 365 -subj "/CN=steeringcolumnsgalore.com/C=US"

    sudo nginx -t && sudo systemctl reload nginx
}

sudo nginx -t 
sudo systemctl restart nginx

sudo mkdir -p /var/www/app
sudo chown $(whoami):$(whoami) /var/www/app
cd /var/www/app
git clone $REPOSITORY_URL .
npm ci
npm run build
cd srv
npm run start