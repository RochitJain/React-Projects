var random = require('random-string-alphanumeric-generator');
import {useEffect, useState} from 'react'
export default function addProduct() {
    
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const addProduct = async function (e: any) {
        e.preventDefault(); 
        const token = localStorage.getItem('token');
       
        const orderId = random.randomAlphanumeric(10,'uppercase');
        const data = {name,price,quantity,orderId}
        console.log(data);
         await fetch('http://localhost:4002/product/product-add',{
             method: 'POST',
             body: JSON.stringify(data),
             mode: 'cors',
             headers: {
                 'Authorization': `Bearer ${token}`,
                 'Content-Type': 'application/json',
             },
         }).then(res=> console.log((res)))
    }

    return(
        <>
        <div className="flex justify-center items-center h-screen w-screen">
            <div className="bg-white flex justify-center h-3/5 w-1/3 p-5 rounded-2xl shadow-white shadow-2xl drop-shadow-2xl">
                <form  onSubmit={addProduct} className='p-5 w-3/5'>
                    <h1 className='text-teal-600 self-start p-6 font-bold font-serif text-2xl'>Add Product</h1>
                    <label className='text-black'>Product Name</label>
                    <input value ={name} onChange={(e)=>setName(e.target.value)} className='p-3 bg-black text-white mt-2 rounded-md'></input>
                    <label className='text-black mb-2'>Product Price</label>
                    <input value ={price} onChange={(e)=>setPrice(e.target.value)} className='p-3 bg-black mt-2 rounded-md'></input>
                    <label className='text-black mb-2'>Quantity</label>
                    <input value ={quantity} onChange={(e)=>setQuantity(e.target.value)} className='p-3 bg-black mt-2 rounded-md'></input>
                    <div>
                    <button type="submit" className='p-2 bg-teal-950 m-4 ml-12'>Add Product</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )

}