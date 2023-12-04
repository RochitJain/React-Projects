import { faEdit, faTrash } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Modal } from "@mui/material";
// import AddProduct from './addProduct'
var random = require('random-string-alphanumeric-generator');

export default function AdminHome() {

    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', price: '', quantity: '', orderId: '' })
    const [formMode, setFormMode] = useState('Add');
    const [productData, setProductData] = useState([]);
    

    const handleOpenModal = () => {
        setModalOpen(true);
    }

    const handleCloseModal = () => {
        setFormMode('Add');
        setModalOpen(false);
    }

    const addOrUpdateProduct = async function (e: any) {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (formMode === 'Add') {
            const orderId = random.randomAlphanumeric(6, 'uppercase');
            const data = { ...formData, orderId }
            console.log(data);
            await fetch('http://localhost:4002/product/product-add', {
                method: 'POST',
                body: JSON.stringify(data),
                mode: 'cors',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            }).then(res => {
                res.json();
                setModalOpen(false);
                productList();
                setFormData({ name: '', price: '', quantity: '', orderId: '' })
            })
        } else {
            await fetch('http://localhost:4002/product/product-update', {
                method: 'PUT',
                body: JSON.stringify(formData),
                mode: 'cors',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            }).then(res => {
                console.log(res.clone().json());
                res.clone().json();
                productList();
                setFormData({ name: '', price: '', quantity: '', orderId: '' })
                setModalOpen(false);
            })
        }
    }

    const productList = async () => {
        const token = localStorage.getItem('token');
        await fetch('http://localhost:4002/product/product-list', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        }).then(res => res.json()).then(res => setProductData(res))
    }

    useEffect(() => {
        productList()
    }, [])

    const DeleteRecord = async (orderId: any) => {
        const token = localStorage.getItem('token');
        await fetch('http://localhost:4002/product/delete-product', {
            method: 'DELETE',
            body: JSON.stringify({orderId}),
            mode: 'cors',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }
    ).then(res=> {
        productList();
        console.log(res.json());
    })
    }

    const editRecord = async (product: any) => {
        setFormMode('Update')
        setModalOpen(true);
        console.log(product);
        setFormData({ name: product.name, price: product.price, quantity: product.quantity, orderId: product.orderId });

    }

    const tableData =
        productData.map((product, index) => {
            return (
                <tr className="text-center" key={index}>
                    <td>{index + 1}</td>
                    <td><a href="http://localhost:3001/admin/contactUs/">{product['name']}</a></td>
                    <td>{product['price']}</td>
                    <td>{product['quantity']}</td>
                    <td>{product['orderId']}</td>
                    <td><button onClick={() => DeleteRecord(product['orderId'])}><FontAwesomeIcon icon={faTrash} style={{ color: "#e41d07", }}></FontAwesomeIcon></button></td>
                    <td><button onClick={() => editRecord(product)}><FontAwesomeIcon icon={faEdit} style={{ color: "#0091ff", }}></FontAwesomeIcon></button></td>
                </tr>
            )
        })






    return (
        <>
            <div className="flex">
                <div className="">
                    <div className="flex justify-evenly">
                        <h1 className="text-6xl text-teal-950 text-center">Welcome </h1>
                        <button className="p-1 bg-teal-800 rounded-2xl " onClick={handleOpenModal}>Add Product</button>
                    </div>
                    <table className="overflow-auto border-spacing-5 border border-blue-700 h-2/5 w-screen">
                        <thead>
                            <tr>
                                <th>S. No</th>
                                <th>Product Name</th>
                                <th>Product Value</th>
                                <th>Quantity</th>
                                <th>Order ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData}
                        </tbody>
                    </table>

                </div>
                <Modal open={modalOpen} onClose={handleCloseModal} >
                    <div className="flex justify-center items-center h-screen w-screen">
                        <div className="bg-white flex justify-center h-3/5 w-1/3 p-5 rounded-2xl shadow-white shadow-2xl drop-shadow-2xl">

                            <form onSubmit={addOrUpdateProduct} className='p-3 w-4/5 flex-col justify-center'>
                                <h1 className='text-teal-600 self-start p-6 font-bold font-serif text-2xl text-center'>{formMode} Product</h1>
                                <label className='text-black block text-center'>Product Name</label>
                                <input name="name" type='text' value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className='p-3 bg-black text-white ml-16 rounded-md' required ></input>
                                <label className='text-black block text-center mt-3'>Product Price</label>
                                <input name="price" type='number' value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} className='p-3 bg-black ml-16 rounded-md' required></input>
                                <label className='text-black mt-3 block text-center'>Quantity</label>
                                <input name="quantity" type='number' value={formData.quantity} onChange={(e) => setFormData({ ...formData, quantity: e.target.value })} className='p-3 bg-black ml-16 rounded-md' required></input>
                                <div>
                                    {(formMode === 'Add') ? <button type="submit" className='p-2 bg-teal-950 m-4 ml-24 rounded-md shadow-lg shadow-teal-600'>{formMode} Product</button> : <button type="submit" className='p-2 bg-teal-950 m-4 ml-24 rounded-md shadow-lg shadow-teal-600'>{formMode} Product</button>}
                                </div>
                            </form>
                            <button className="text-teal-500 shadow-2xl shadow-black h-6 w-3" onClick={handleCloseModal}>x</button>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    )
}