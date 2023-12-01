const express = require('express')
const mongoose = require('mongoose');
const ProductController = require( '../controller/product.controller' )
const middleware = require('../middleware/auth')

const router = express.Router();

router.get('/product-list',middleware.auth,ProductController.getProducts);
router.post('/product-add',middleware.auth,ProductController.addProduct);

module.exports = router;