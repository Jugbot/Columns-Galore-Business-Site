#!/bin/bash
echo "Hello world!"
export DB_HOST=${mysql_host}
export DB_USER=${mysql_user}
export DB_PASSWORD=${mysql_password}
export REPOSITORY_URL=${repository_url}
export EMAIL_NAME=${email_name}
export EMAIL_PASSWORD=${email_password}

sudo mkdir -p /var/www/app
sudo chown $(whoami):$(whoami) /var/www/app
cd /var/www/app
git clone $REPOSITORY_URL .
npm ci
npm run build --if-present