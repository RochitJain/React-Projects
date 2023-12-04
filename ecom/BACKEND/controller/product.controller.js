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

exports.updateProduct = async function (req,res) {

    try{
         if(req.user.role ==='admin') {
            await productService.updateProduct(req.body)
            .then(res.json({message: 'Product Updated'}))
        } else {
            res.json({message:'User not Authorized'});
        }

    } catch(e) {
        res.json({message:e})
    }
}

exports.deleteRecord = async function (req, res) {

    try{
        if(req.user.role === 'admin') {
            //console.log(req.body)
            await productService.deleteRecord(req.body.orderId)
            .then(res.json({message: 'Product Deleted'}))
        } else {
            res.json({message:'User not Authorized'});
        }

    } catch(e) {
        res.json({message:e})
    }
}