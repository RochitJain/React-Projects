const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    price: {
        required:true,
        type: Number,
    },
    rating: {
        type: Number
    },
    quantity: {
        type: Number,
    },
    image: {
        type: Buffer
    },
    orderId: {
        unique: true,
        type: String
    }

    
})

// productSchema.post('save',async function(){
//     try{
//     console.log('this',this);
//     }catch(e) {
//         console.log('e',e.message);
//     }
// })


const productModel = mongoose.model('Product',productSchema);

module.exports = productModel;