# Nathanal Photography

#### This is a website for Nathanal Photography

#### By **William Britton**

## Description

This website is created using React and is a website for Nathanal Photography. It is a simple website that displays some of the photographers work.

## Setup/Installation Requirements

`npm install`

`npm run dev`

Includes an Azure Function app that exposes an API to pull image urls from a Azure storage account.

## Setup/Installation Requirements

- Install Azure Functions Core Tools
  - [Azure Functions Core Tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=macos%2Ccsharp%2Cbash)
  - brew tap azure/functions
  - brew install azure-functions-core-tools@4
  `func --version`

- To run the function app locally
  - `cd api`
  - `func init`
  - `func start`
