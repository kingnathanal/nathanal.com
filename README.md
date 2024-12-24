# Nathanal Photography

#### This is a website for Nathanal Photography

#### By **William Britton**

## Description

This website is created using React and is a website for Nathanal Photography. It is a simple website that displays some of the photographers work.

## Technologies Used
- React
- Azure Functions
- Azure Static Web App
- Azure Storage Account
- Terraform

## React App

### React Setup/Installation Requirements

`npm install`

`npm run dev`

`npm run build`

## Azure Function App

### Function Setup/Installation Requirements

- Install Azure Functions Core Tools
  - [Azure Functions Core Tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=macos%2Ccsharp%2Cbash)
  - brew tap azure/functions
  - brew install azure-functions-core-tools@4
  `func --version`

- To run the function app locally
  - `cd api`
  - `func init`
  - `func start`

## Azure Static Web App

### Azure Static Web App Setup/Installation Requirements

- Install Azure CLI
  - [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
  - `az login`
  - `az account set --subscription <subscription-id>`
  - `npm install -D @azure/static-web-apps-cli`
  - `npx swa init --yes`
  - `npx swa loging --resource_group <resource-group-name> --location <location>`
  - `npx swa deploy --env production`
