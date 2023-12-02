const mongoose = require('mongoose');
const productService = require('../service/product.service')


exports.getProducts = async function (req,res) {

    try{
        if(req.user.role==='admin') {
        await productService.getProducts(req.body)
        .then(response=>{
            res.json(response);
    })
}
    }catch(e) {
        res.json({message: e.message})
    }
}

exports.addProduct = async function (req,res) {

    try{
        if(req.user.role==='admin') {
        await productService.addProduct(req.body)
        .then(response=>{
            res.json(response)
        })
    }else {
        res.json({message: 'User not authorized'});
    }
    }catch(e){
        res.json({message: e.message});
    }
}