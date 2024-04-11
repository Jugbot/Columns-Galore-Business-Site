resource "vultr_instance" "nodejs_server" {
  plan     = var.nodejs_plan
  region   = var.region
  os_id    = "387" # Ubuntu 20.04 x64
  label    = "nodejs-backend"
  hostname = "nodejs-backend.example.com"

  # User data to install Node.js and other startup scripts
  user_data = file("server_setup.sh")
}