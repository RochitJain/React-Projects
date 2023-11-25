const express = require('express')
const mongoose = require('mongoose');

const userController = require('../controller/user.controller')

const router = express.Router();

router.get('/start',userController.getUser)
router.post('/start',userController.addUser);
router.route('/start').delete();

module.exports = router;


// router.get('/start', async(req,res)=>{
//     const result = await userModel()
//     res.send(result);
// })

// router.post('/start',async(req,res)=>{
//     const product = new userModel({
//         name: req.body.name,
//         email: req.body.email
//     })
//     const result = await product.save()
//     // console.log(result)
// })

module.exports = router