//Importing express package
const express=require('express');

const router=express.Router();

//uing routes
router.use('/products',require('./products'));

module.exports=router;