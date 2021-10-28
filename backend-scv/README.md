# Backend application

## Prerrequisites

This application needs the following prerrequisites:

  - [PostgreSQL >= 10](https://www.postgresql.org/)
  - [Python >= 3.5](https://www.python.org/)

This process will create a database called `scvdb` . If you need to change this or other configuration options, refer to the `config.json` file on the root directory.

In the proyect's main directory run:

`python3 setup.py`

This will create a database called `scvdb` and install all the required packages.

Run the application

`python3 main.py`

## Create a stock with value.

`curl 'http://127.0.0.1:5000/api/graphql' \
  -X POST \
  -H 'content-type: application/json' \
  --data '{
    "query":"mutation {
       loadStockValue(name: \"Stock stock\", price: 1000){ ok }
    }"
  }'
  `

## Update a stock with a value.

`curl 'http://127.0.0.1:5000/api/graphql' \
 -X POST \
 -D - \
 -H 'content-type: application/json' \
 --data '{
   "mutation": "{ updateStockValue(id: 1,  price: 1000) { ok } }"
 }'
 `
