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

exports.updateProduct = async function(query) {
    try{
        var orderId = query.orderId;
        await productModel.findOneAndUpdate({orderId},query)
        .then(res=>res.json(res))
        .catch(e=> res.json(e))

    } catch(e) {

    }
}

exports.deleteRecord = async function(orderId) {

    try{
        //console.log(orderId)
        await productModel.deleteOne({orderId})
        .then(res=>res.json(res))
        .catch(e=> res.json(e))

    } catch(e) {

    }
}
