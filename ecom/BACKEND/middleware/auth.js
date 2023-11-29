const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


exports.tokenGenerate = async function (User){


    const token = jwt.sign({name: User.email},process.env.SECRET_KEY,
        {
        expiresIn: '10s'
    })

    return token;
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