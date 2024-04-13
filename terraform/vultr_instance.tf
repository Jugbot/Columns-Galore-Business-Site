resource "vultr_instance" "nodejs_server" {
  plan      = var.nodejs_plan
  image_id  = "nodejs"
  region    = var.region
  label     = "nodejs-backend"
  hostname  = "steeringcolumnsgalore.com"
  vpc2_ids  = [vultr_vpc2.my_vpc2.id]
  script_id = vultr_startup_script.setup_script.id
}

resource "vultr_startup_script" "setup_script" {
  name = "Server Setup"
  type = "boot"
  script = base64encode(templatefile("server_setup.sh", {
    repository_url = var.REPOSITORY_URL
    mysql_user     = var.MYSQL_USER
    mysql_password = var.MYSQL_PASSWORD
    mysql_host     = vultr_database.mysql_db.public_host
    email_name     = var.EMAIL_NAME
    email_password = var.EMAIL_PASSWORD
  }))
}
