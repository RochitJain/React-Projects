const userModel = require('../schemas/product.model')

exports.getUser= async function(query) {
    try{

        var users= await userModel.find(query).lean().exec();
        return users;

    }catch{

    }
}

exports.addUser= async function(query) {
    try{
        var users= new userModel(query);
        users.save();
        return users;
    }catch{

    }
}
