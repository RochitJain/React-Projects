const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb');


exports.tokenGenerate = async function (_id){

    // console.log(_id);
    const token = jwt.sign({_id},process.env.SECRET_KEY,
        {
        expiresIn: '3d'
    })

    return token;
}

exports.tokenVerify = async function (token,_id) {
    const isMatching = jwt.verify(token,process.env.SECRET_KEY);
    return {_id:isMatching._id, istrue: _id.toString() === isMatching._id ? true : false}
}

exports.auth = async function (req, res, next) {
    try{
    const tokenString = req.headers['authorization'].split(' ')[1];
    

    const isMatching = jwt.verify(tokenString,process.env.SECRET_KEY);
    req.user = isMatching._id;
    next();
    }catch {

}
}

exports.isPasswordMatching = async function (password,hash) {
    // console.log(password,hash);
    const isMatching = await bcrypt.compare(password,hash);

    // console.log(isMatching);
    return isMatching;
    

}

exports.passwordHashing = async function (password) {

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
   const hashedPassword = await bcrypt.hash(password,salt);
    return hashedPassword;
}