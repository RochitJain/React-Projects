// import '../styles/login.css';

export default function Login() {

    return(
        <>
        <div className="w-screen h-screen bg-white flex justify-center">
            <div className="container border  max-w-5xl flex justify-center items-center bg-blue-300 opacity-70">
                <div className="h-3/5 w-1/2 border box-border rounded flex flex-col p-3 bg-white shadow-white shadow-md ">
                    <h1 className="text-black text-4xl m-4 ">SignUp</h1>
                    <h2 className="text-gray-700 ml-4">Wont take more than a minute</h2>
                    <label className="text-black ml-4 mt-5 place-self-center">Your Name</label>
                    <input className="p-2 bg-white border-2 border-rose-300  hover:border-black rounded place-self-stretch ml-20 max-w-xs"/>
                    <label className="text-black ml-4 mt-5 place-self-center">Your Email</label>
                    <input className="p-2 bg-white border-2 border-rose-300  hover:border-black rounded place-self-stretch ml-20 max-w-xs" required/>
                    <label className="text-black ml-4 mt-5 place-self-center">Your Password</label>
                    <input className="p-2 bg-white border-2 border-rose-300 hover:border-black rounded place-self-stretch ml-20 max-w-xs" type="password"/>
                    <button className=" rounded text-black bg-blue-600 place-self-center p-3 m-5 box-content">Create account</button>
                    <label className="p-2 text-violet-700">Already have an account? <a className="hover:text-black" href="/">Login</a></label>

                </div>
            </div>






            {/* <div className=" border p-7 bg-orange-900 rounded-lg">
                <header className="text-4xl mb-4">Sign Up</header>
                <form >
                <header className="text-center text-lg">First Name</header>
                <input className=" rounded p-2 w-full mt-4 mb-4"></input>

                <header className="text-center text-lg">Last Name</header>
                <input type="email" className="rounded w-full p-2 mt-4"></input>

                <header className="text-center text-lg">Password</header>
                <input type="password" className="rounded w-full p-2 mt-4"></input>

                <button className="rounded cursor-pointer h-4 p-5 w-full mt-4 bg-purple-800 text-center">Create</button>
                </form>
            </div> */}


        </div>
        </>
    )
}