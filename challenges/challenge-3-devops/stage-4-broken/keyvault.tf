# Broken Key Vault Terraform Module - Bug Hunt Exercise
# This module contains 3 intentional bugs. Find and fix all of them.

resource "azurerm_key_vault" "main" {
  name                = "taskflow-kv-${random_string.suffix.result}"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  tenant_id           = data.azurerm_client_config.current.tenant_id
  sku_name            = "standard"

  # Bug 1: This access policy references a non-existent identity
  access_policy {
    tenant_id = data.azurerm_client_config.current.tenant_id
    object_id = azurerm_kubernetes_cluster.main.kubelet_identity.object_id

    secret_permissions = [
      "Get",
      "List",
    ]
  }
}

# Bug 2: This secret references a key that does not exist in the Key Vault
resource "azurerm_key_vault_secret" "db_connection" {
  name         = "database-connection-string"
  value        = "Server=tcp:${azurerm_mssql_server.main.fully_qualified_domain_name};Database=taskflow;"
  key_vault_id = azurerm_key_vault.main.id
}

# Bug 3: The AKS identity for Key Vault access uses the wrong identity type
resource "azurerm_kubernetes_cluster" "main" {
  # ... existing AKS config ...

  key_vault_secrets_provider {
    secret_rotation_enabled = true
  }

  identity {
    type = "SystemAssigned"
  }
}

resource "random_string" "suffix" {
  length  = 6
  special = false
  upper   = false
}
