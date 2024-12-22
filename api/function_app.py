import azure.functions as func
import logging
import json
import os
from azure.storage.blob import BlobServiceClient
from dotenv import load_dotenv

load_dotenv()

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

@app.route(route="nathanal")
def nathanal_portfolio(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    blob_container_name = os.getenv("NATHANAL_BLOB_CONTAINER")
    blob_connection_string = os.getenv("WEBSITE_CONTENTAZUREFILECONNECTIONSTRING")

    try:
        connection_string = blob_connection_string
        container_name = blob_container_name

        # Connect to Blob Storage
        blob_service_client = BlobServiceClient.from_connection_string(connection_string)
        container_client = blob_service_client.get_container_client(container_name)

        # List blobs
        blobs = []
        for blob in container_client.list_blobs():
            blobs.append({
                "name": blob.name,
                "url": f"https://{blob_service_client.account_name}.blob.core.windows.net/{container_name}/{blob.name}"
            })

        # Return the blob data as JSON
        return func.HttpResponse(
            body=json.dumps(blobs),
            mimetype="application/json",
            status_code=200
        )

    except Exception as e:
        logging.error(f"Error: {str(e)}")
        return func.HttpResponse(
            body=f"Error retrieving blobs: {str(e)}",
            status_code=500
        )