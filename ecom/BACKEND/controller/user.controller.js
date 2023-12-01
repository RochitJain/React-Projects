const mongoose = require('mongoose');
const userService = require('../service/user.service');
const authourization = require('../middleware/auth');
const User = require('../schemas/user.model');

exports.loginCheckAdmin = async function (req,res,next) {
    try{
        console.log(req.body);
        const {email, password} = req.body;
        const user = await userService.getUser({email});
        // console.log(user);
        if(!user) return res.json({message:"User Not present"});
        // console.log(user);
        const isMatching = await authourization.isPasswordMatching(password, user.password);
        if(!isMatching) return res.json({message:'Password not matching'});
        // console.log(user);
        if(user.token) return (
        user.token
        )
        // console.log(user);

        const token = await authourization.tokenGenerate(user);
        
        
        res.json({message: 'Login', token,name: user.name});

    }catch(e){
       res.json(e)
    }
}

exports.loginCheckUser = async function (req,res) {

}

exports.registerAdmin = async function (req,res,next) {

    try {

    const {name, email, password} = req.body;
    //console.log(req.body);
    const hashedPassword = await authourization.passwordHashing(password);
    
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role: 'admin'
    });

    //console.log(user);
    //console.log(token)
    // const isMatching = await auth.tokenVerify(token,user._id);
    //console.log(isMatching);
    // console.log(JSON.stringify(user));
    res.json({message:'User Registered'});

    }catch(e){
        console.log(e);
        res.json(e);
    }
}

exports.registerUser = async function (req,res) {

}

exports.addUser = async function (req,res,next) {
    try{
    await userService.addUser(req.body)
    .then(response=>{
        res.send(response)
    })
    // console.log(users);

    }catch{

    }
}