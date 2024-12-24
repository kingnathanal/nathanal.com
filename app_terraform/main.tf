locals {
  location = "eastus2"
}

resource "azurerm_resource_group" "rg" {
  name     = "nathanal-rg"
  location = local.location
}

resource "azurerm_storage_account" "blobs" {
  name                       = "nathanalst"
  resource_group_name        = azurerm_resource_group.rg.name
  location                   = local.location
  account_tier               = "Standard"
  account_replication_type   = "LRS"
  https_traffic_only_enabled = true

  blob_properties {
    cors_rule {
      allowed_headers    = ["*"]
      allowed_methods    = ["GET", "HEAD"]
      allowed_origins    = ["*"]
      exposed_headers    = ["*"]
      max_age_in_seconds = 200
    }
  }

}

resource "azurerm_storage_container" "blobs" {
  name                  = "portfolio"
  storage_account_id    = azurerm_storage_account.blobs.id
  container_access_type = "blob"
}

resource "azurerm_role_assignment" "storage_contributor" {
  scope                = azurerm_storage_account.blobs.id
  role_definition_name = "Storage Blob Data Contributor"
  principal_id         = var.azure_admin_id
}

resource "azurerm_service_plan" "nathanal" {
  name                = "nathanal-service-plan"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  os_type             = "Linux"
  sku_name            = "Y1"
}

resource "azurerm_linux_function_app" "nathanal" {
  name                = "nathanal-func"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location

  service_plan_id            = azurerm_service_plan.nathanal.id
  storage_account_name       = azurerm_storage_account.blobs.name
  storage_account_access_key = azurerm_storage_account.blobs.primary_access_key


  app_settings = {
    "NATHANAL_BLOB_CONTAINER" : azurerm_storage_container.blobs.name
    "NATHANAL_BLOB_STORAGE_KEY" : azurerm_storage_account.blobs.primary_access_key
  }

  site_config {

    application_stack {
      python_version = "3.11"
    }

    cors {
      allowed_origins     = ["*", "http://localhost:5173"]
      support_credentials = false
    }
  }

  lifecycle {
    ignore_changes = [
      app_settings["WEBSITE_ENABLE_SYNC_UPDATE_SITE"]
    ]
  }
}

resource "azurerm_static_web_app" "nathanal" {
  name                = "nathanal-photography"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
}

output "storage_url" {
  value = azurerm_storage_account.blobs.primary_blob_endpoint
}

output "function_app_name" {
  value = azurerm_linux_function_app.nathanal.name
}

output "nathanal_resource_group" {
  value = azurerm_resource_group.rg.name
}

output "function_app_url" {
  value = azurerm_linux_function_app.nathanal.default_hostname
}

output "web_app_url" {
  value = azurerm_static_web_app.nathanal.default_host_name
}

output "web_api_key" {
  value = azurerm_static_web_app.nathanal.api_key
  sensitive = true
}

variable "azure_admin_id" {
  type        = string
  description = "Object Id of the Azure AD user"
}

