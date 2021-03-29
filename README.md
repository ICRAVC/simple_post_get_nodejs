## Example of usage

HOST=\
PORT=\
USER_DB=\
PWD_DB=\
PORT_DB=\
NAME_DB =

You need to fill the environment variables (`.example.env`) with your credentials (note the database name is one that exists in your local instance)

you need to use `npm i ` to install the node_modules\
then run the program using nodemon app.js\

The program by itself will create the database and the tables using the script sql added in the source (`Gadgets_db.sql`).

- Post:
  Create a new product\
  localhost:8080/products
- Result:

```json
{
  "name": "p2",
  "price": 1234.56,
  "description": "Something amazing",
  "date": "31-10-2020"
}
```

Get: Lookinng for products using a query variable ('`dates`') in this case and a format of date `dd-mm-yyyy`\
localhost:8080/products?dates=30-05-2013

- Result:

````json
   {
       "id": 1,
       "_name": "p1",
       "price": 15.5,
       "_description": "some things of p1",
       "_date": "2021-03-29T06:00:00.000Z"
   },
   {
       "id": 2,
       "_name": "p4",
       "price": 15.5,
       "_description": "some things of p4",
       "_date": "2021-05-29T05:00:00.000Z"
   },
   {
       "id": 3,
       "_name": "p5",
       "price": 15.5,
       "_description": "some things of p5",
       "_date": "2021-06-29T05:00:00.000Z"
   },
   {
       "id": 4,
       "_name": "p6",
       "price": 15.5,
       "_description": "some things of p6",
       "_date": "2021-04-29T05:00:00.000Z"
   },
   {
       "id": 5,
       "_name": "p7",
       "price": 15.5,
       "_description": "some things of p7",
       "_date": "2021-03-30T06:00:00.000Z"
   },
   {
       "id": 8,
       "_name": "p9",
       "price": 15.5,
       "_description": "some things of p9",
       "_date": "2013-06-29T05:00:00.000Z"
   }
   ```
````
