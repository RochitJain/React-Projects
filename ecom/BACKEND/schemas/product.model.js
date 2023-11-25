const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String
    },
    price:{
        required:true,
        type: Number,
    },
    rating:{
        type: Number
    },

    
})




const productModel = mongoose.model('Product',productSchema);

module.exports = productModel;