resource "vultr_database" "mysql_db" {
  vpc_id                    = vultr_vpc2.my_vpc2.id
  label                     = "mysql-store"
  database_engine           = "mysql"
  database_engine_version   = "8"
  plan                      = var.mysql_plan
  region                    = var.region
  mysql_require_primary_key = true
  mysql_sql_modes = [
    "ANSI",
    "ERROR_FOR_DIVISION_BY_ZERO",
    "NO_ENGINE_SUBSTITUTION",
    "NO_ZERO_DATE",
    "NO_ZERO_IN_DATE",
    "STRICT_ALL_TABLES",
  ]
}

resource "vultr_database_user" "my_database_user" {
  database_id = vultr_database.mysql_db.id
  username    = var.DB_USER
  password    = var.DB_PASSWORD
}