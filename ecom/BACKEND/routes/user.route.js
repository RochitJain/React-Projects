const express = require('express')
const mongoose = require('mongoose');

const userController = require('../controller/user.controller');
const productController = require('../controller/product.controller')

const router = express.Router();

router.post('/admin-login',userController.loginCheckAdmin)
router.post('/admin-register',userController.registerAdmin)
router.get('/user-login',userController.loginCheckUser);
router.post('/user-register', userController.registerUser);
router.post('/', )

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
