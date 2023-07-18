//This line import product model
const products = require('../models/products');

//This method add a new product
module.exports.createProduct = function (req, res) {

    // console.log(req.body);

    let ans = {};

    const product = new products({
        name: req.body.name,
        quantity: req.body.quantity
    })

    product.save().then((result) => {

        ans.data = {
            name: result.name,
            quantity: result.quantity
        };

        console.log(result);
        return res.send(ans);
    }).catch((err) => {
        console.log(err);
        return res.send(err);
    })

}

// This method return all the products
module.exports.listProducts = function (req, res) {
    var ans = {};
    products.find({}, { __v: 0 }).then((result) => {
        ans.data = {

        }
        ans.data.products = result;
        console.log(ans);
        return res.send(ans);
    }).catch((err) => {
        console.log(err);
        return res.send(err);
    })
}

// This methos delete product by id
module.exports.deleteProduct = function (req, res) {
    let id = req.params.id;
    let ans = {};
    products.findByIdAndDelete(id).then((result) => {
        ans.data = {};
        ans.data.message = "product deleted";
        console.log(result);
        return res.send(ans);
    }).catch((err) => {
        console.log(err);
        return res.send(err);
    })
}

// This method update quantity of a product
module.exports.updateQuantity = function (req, res) {
    let id = req.params.id;
    let number = req.query.number;
    let ans = {};


    products.findByIdAndUpdate(id,
        {
            quantity: number
        }).then((result) => {
            ans.data = {
                id: result.id,
                name: result.name,
                quantity: result.quantity

            }
            ans.message = "updated succesfully"
            console.log(result);
            return res.send(ans);
        }).catch((err) => {
            console.log(err);
            return res.send(err);
        })
    // console.log(id);
    // console.log(number);
    // return res.send('hello');

}