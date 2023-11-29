import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { useState } from "react";
import { faAddressCard } from '@fortawesome/fontawesome-free-solid';

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = async function (e: any) {

        e.preventDefault();
        const data = {name,email,password};
        await fetch('http://localhost:4002/user/admin-register',{
            method: 'POST',
            body: JSON.stringify(data),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp=> console.log(resp))




        
    }

    return (
        <>
            <div className="flex justify-center items-center h-screen w-screen bg-white">
                <div className="flex bg-teal-500 shadow-red-600 shadow-2xl justify-center p-4 rounded-3xl h-5/6 w-2/5">
                    
                    <form className= "p-5 w-3/5" onSubmit={registerUser}>
                        <h1 className="text-black text-3xl font-serif font-extralight p-4 mb-4"><FontAwesomeIcon icon={faAddressCard} size="lg" className='mr-3'/>Register</h1>
                        <label className="block text-base"> Name</label>
                        <input type="text" className="text-black w-full h-9 mt-3 rounded-lg border-2 border-rose-300" value={name} onChange={(e) => setName(e.target.value)}></input>
                        <label className="block text-base mt-4"> Email</label>
                        <input type="text" className="text-black w-full h-9 mt-3 rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <label className="block text-base mt-4">Password</label>
                        <input type="password" className="text-black block w-full h-9 mt-3 rounded-lg" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        <div className="flex justify-between items-center mt-6">
                        <button type="submit" className=" rounded bg-blue-700 p-2 text-black">Register</button>
                        <a href="">Forget Password ?</a>
                        </div>
                    </form>
            
                </div>
            </div>
        </>
    )
}