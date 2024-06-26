terraform {
  cloud {
    organization = "columnsgalore"

    workspaces {
      name = "columnsgalore"
    }
  }
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
