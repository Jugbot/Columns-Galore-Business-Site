resource "vultr_database" "mysql_db" {
  label                   = "mysql-store"
  database_engine         = "mysql"
  database_engine_version = "8.0"
  plan                    = var.mysql_plan
  region                  = var.region
}
