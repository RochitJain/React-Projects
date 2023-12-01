import { useEffect , useState } from "react";

export default function Home() {

    const [productData,setProductData] = useState([]);
    useEffect(() => {
       const token = localStorage.getItem('token');
       async function productList() {
        await fetch('http://localhost:4002/product/product-list',{
        method:'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            
        }
        }).then(res=>res.json()).then(res=>setProductData(res))
    }
    productList();
},[])

        const tableData = 
        productData.map(data =>{
            return(
               <tr>
                <td>1</td>
                <td>{data['name']}</td>
                <td>{data['price']}</td>
                <td>{data['quantity']}</td>
                <td>{data['orderId']}</td>
               </tr>
            )
        })
    



    return(<>
    <div className="flex justify-center items-center">
    <div className="">
    <h1 className="text-6xl text-teal-950 text-center">Welcome</h1>
    <table>
        <thead>
            <tr>
                <th>Sr.No</th>
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
    </div>
    </>)
}