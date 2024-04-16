variable "VULTR_API_KEY" {
  description = "Your Vultr API Key"
  type        = string
  sensitive   = true
}

variable "REPOSITORY_URL" {
  description = "The public URL of the repository to deploy"
  type        = string
}

variable "MYSQL_USER" {
  description = "The MySQL user"
  type        = string
  sensitive   = true
}

variable "MYSQL_PASSWORD" {
  description = "The MySQL password"
  type        = string
  sensitive   = true
}

variable "EMAIL_NAME" {
  description = "The quote form email"
  type        = string
}

variable "EMAIL_PASSWORD" {
  description = "The quote form email password"
  type        = string
  sensitive   = true
}

variable "region" {
  description = "The region to deploy resources in"
  default     = "ewr"
}

variable "nodejs_plan" {
  description = "The plan to use for the Node.js server"
  default     = "vc2-1c-1gb"
}

variable "mysql_plan" {
  description = "The plan to use for the MySQL database"
  default     = "vultr-dbaas-hobbyist-cc-1-25-1"
}