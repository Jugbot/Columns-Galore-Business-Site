output "nodejs_server_ip" {
  value = vultr_instance.nodejs_server.main_ip
}

output "mysql_db_host" {
  value = vultr_database.mysql_db.host
}

output "mysql_db_user" {
  value = vultr_database.mysql_db.user
}

output "mysql_db_password" {
  value = vultr_database.mysql_db.password
}

output "mysql_db_name" {
  value = vultr_database.mysql_db.dbname
}
