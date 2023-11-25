const mongoose = require('mongoose');
const userService = require('../service/user.service')


exports.getUser = async function (req,res,next) {
    try{
    const users = await userService.getUser(req.body)
    .then(response=>{
        res.send(response);
    })
    }catch{

    }
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