const userModel = require('../schemas/user.model')

exports.getUser= async function(query) {
    try{
        console.log(query);

        var users= await userModel.findOne(query).lean().exec();
        console.log(users)
        return users;

    }catch{

    }
}

exports.addUser= async function(query) {
    try{
        var users= await new userModel(query);
        users.save();
        return users;
    }catch{

    }
}
