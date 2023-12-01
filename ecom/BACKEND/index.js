// // const express = require('express');
// // const mongoose = require('mongoose')
// // const app = express();

// const {MongoClient} = require('mongodb');
// const express = require('express');
// const app = express();
// const dotenv = require('dotenv');
// dotenv.config()


// // const url = "mongodb://localhost:27017";

// // const client = new MongoClient(url)

// const routes = require('./routes/user')

// // async function getData(){
// //     let result = await client.connect();
// //     let db = result.db('ecom');
// //     let collection = await db.createCollection('product');
// //     // let response = await collection.find({}).toArray();
// // }

// app.use(express.json());
// app.use("/api",routes)

// MongoClient.connect(process.env.DB_URL,{
//     useNewUrlParser: true, useUnifiedTopology: true 
// });

// app.listen('4000',()=>console.log('running'));


// module.exports = app


const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const userRoute = require('./routes/user.route');
const productRoute = require('./routes/products.route');


const source = process.env.DB_URL

app.use(express.json());
app.use(cors())

mongoose.connect(source, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection
connection.once('open', () => {
    console.log("DB connected.");
})

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`Successfully served on port :: ${PORT}.`);
})

app.use('/user',userRoute);
 app.use('/product',productRoute)

