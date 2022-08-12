# nextgrowth-backend-exercice

## About the exercice

- Create a CRUD for the product model with its variants
- An API key is required for each request to be authorized

## Lunch the app
1. install required packages ` npm install `
2. include .env file and include variables below 👇
    a. `MONGO_URI` mongodb connection uri provided by mongodb Atlas.
    b. `TOKEN_SECRET` a passphrase that is used to encrypt and decrypt data.
3. now you can access the API in http://localhost:8080

## Entry Points
| Method | Entry point | description|
|--------|-------------|------------|
| GET | /generate_token  | generate an API key to include in the header of the rest of the endpoints |
| GET | /product/ | return List of product |
| POST | /product/ | create a new product |
| GET | /product/{:product_id} | return a specific product |
| DELETE | /product/{:product_id} | remove product |
| PATCH | /product/{:product_id} | Update product details |
| GET | /product/{:product_id}/variants/ | Return list of variants of given product |
| GET | /product/{:product_id}/variants/{:variant_id} | Return variant info of given product |