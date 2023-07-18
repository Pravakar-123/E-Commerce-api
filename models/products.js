//import mongoose package
const mongoose=require('mongoose');
//product schama design
const productSchama=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        default:0
    }
})

//create model of product
const product=mongoose.model('product',productSchama);

//export product model
module.exports=product;