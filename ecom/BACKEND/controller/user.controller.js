const mongoose = require('mongoose');
const userService = require('../service/user.service');
const auth = require('../middleware/auth');
const User = require('../schemas/user.model');
const res = 

exports.loginCheckAdmin = async function (req,res,next) {
    try{
        const [email, password] = req.body;
        const user = await userService.getUser({email});
        if(!user) return res.send("Not present");

        const isMatching = await auth.isPasswordMatching(password, user.password);
        if(!isMatching) return res.send('Not matching');

        if(user.token) return (
        user.token
        )

        const token = await auth.tokenGenerate(user);
        
        
        res.send({message: 'Login', token});

    }catch(e){
        log(e)
    }
}

exports.loginCheckUser = async function (req,res) {

}

exports.registerAdmin = async function (req,res,next) {

    try {
        console.log(req.body)
    const {name, email, password} = req.body;

    const hashedPassword = await auth.passwordHashing(password);
    
    User.create({
        name,
        email,
        password: hashedPassword,
        role: 'admin'
    });

    res.send("Registered");

    }catch(e){
        console.log(e);
        res.send(e);
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