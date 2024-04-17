resource "vultr_instance" "nodejs_server" {
  plan      = var.nodejs_plan
  os_id     = 1743
  region    = var.region
  label     = "nodejs-backend"
  hostname  = "steeringcolumnsgalore.com"
  vpc2_ids  = [vultr_vpc2.my_vpc2.id]
  script_id = vultr_startup_script.setup_script.id
  lifecycle {
    replace_triggered_by = [
      terraform_data.always_run
    ]
  }
}

resource "vultr_startup_script" "setup_script" {
  name = "Server Setup"
  type = "boot"
  script = base64encode(templatefile("server_setup.sh", {
    repository_url = var.REPOSITORY_URL
    mysql_user     = var.DB_USER
    mysql_password = var.DB_PASSWORD
    mysql_host     = vultr_database.mysql_db.host
    mysql_port     = vultr_database.mysql_db.port
    email_name     = var.EMAIL_NAME
    email_password = var.EMAIL_PASSWORD
    nginx_config   = file("nginx.conf")
  }))
}

resource "terraform_data" "always_run" {
  input = timestamp()
}