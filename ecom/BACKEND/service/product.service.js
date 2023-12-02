const productModel = require('../schemas/product.model');


exports.getProducts = async function(query) {
    try{

        var products = await productModel.find(query).lean().exec();
        return products;

    }catch{

    }
}

exports.addProduct = async function(query) {
    try{
        var users= new productModel(query);
        await users.save()
        return {};
    }catch(e){
        console.log(e)
        if(e.code===11000) {
            return {message: 'Unique OrderId only'}
        }
    }
}
