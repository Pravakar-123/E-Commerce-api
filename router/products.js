//Importing express package
const express=require('express');
const router=express.Router();
//Importing Product controller module
const productsController=require('../controller/productsController');

//To get all product
router.get('/',productsController.listProducts);
//To create a new product
router.post('/create',productsController.createProduct);
//To delete a product
router.delete('/:id',productsController.deleteProduct);
//To update a product
router.post('/:id/update_quantity',productsController.updateQuantity);

module.exports=router;