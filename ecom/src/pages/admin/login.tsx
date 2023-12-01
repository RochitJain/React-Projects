import { log } from "console";
import { useState } from "react";
// import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const submitAdminLogin = async (e: any) => {
        e.preventDefault();
        const data = { email, password }
        await fetch('http://localhost:4002/user/admin-login', {
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res=>res.json()).then(res=>{
            if(res.message=== "Login") {
                localStorage.setItem('token',res.token);
                localStorage.setItem('name',res.name);
                localStorage.setItem('email',res.email);
                window.location.replace('/admin/home');
                console.log(res);
            } else if(res.message === "User Not present") {
                window.alert(res.message);
            } else if(res.message === "Password not matching") {
                window.alert(res.message);
            }
        })
    }



    return (
        <>
            <div className="flex justify-center items-center h-screen w-screen bg-white">
                <div className="flex bg-teal-500 shadow-red-600 shadow-2xl justify-center p-4 rounded-3xl h-3/6 w-2/5">
                    
                    <form onSubmit={submitAdminLogin} className= "p-5 w-3/5">
                        <h1 className="text-black text-3xl font-serif font-extralight p-4 mb-4">Login</h1>
                        <label className="block text-base"> Email</label>
                        <input type="text" className="text-black w-full h-9 mt-3 rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <label className="block text-base mt-4">Password</label>
                        <input type="password" className="text-black block w-full h-9 mt-3 rounded-lg" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        <div className="flex justify-between items-center mt-6">
                        <button type="submit" className=" rounded bg-blue-700 p-2">Login</button>
                        <a href="">Forget Password ?</a>
                        </div>
                    </form>
            
                </div>
            </div>
        </>
    )
}