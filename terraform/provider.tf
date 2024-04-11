terraform {
  required_providers {
    vultr = {
      source  = "vultr/vultr"
      version = ">= 2.19.0"
    }
  }
}

provider "vultr" {
  api_key = var.VULTR_API_KEY
}

variable "VULTR_API_KEY" {
  description = "Your Vultr API Key"
  type        = string
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
  default     = "vdb-1c-1gb"
}