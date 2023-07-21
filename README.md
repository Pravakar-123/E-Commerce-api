# E-Commerce-api

# ABOUT
This is an E-commerce API made using Node.Js & MongoDB. 

STEPS TO USE THE API:
1) run "npm init" command on terminal in this projects directory
2) run "npm install" command on terminal in this projects directory
3) start the server using node app.js
4) Open postman
5) Make a GET request on localhost:3000/products
6) The products should be visible

STEPS TO CREATE A NEW PRODUCT: 
1) start the server using node app.js
2) Open postman
3) put localhost:8080/products/create as the url. 
4) Select Body tab below the url textarea and then select x-www-form-urlencoded
5) Add name & quantity as the keys and set the desired values for the keys.
6) Make a POST request.
7) If you recieve the message saying new product added successfully then you have done everything correct.
8) The product is created. Check it out by making a GET request at localhost:3000/products

STEPS TO DELETE A PRODUCT:
1) copy the object id of the product you want to delete.
2) add the id after localhost:3000/products/
3) Make a DELETE request.
4) You will recieve a message saying deleted successfully.
