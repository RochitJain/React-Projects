import Link from 'next/link';
export default function Navbar(){
    return (<>
            {/* <div className=" container flex h-12 row max-w-full bg-slate-800">
            <div className="flex-grow ml-3"><h1 className="font-serif font-extrabold text-2xl p-2">Amazon</h1></div>
            <div className="flex-grow"><h1></h1></div>
            <div className="flex-grow"><h1></h1></div>
            <div className="flex-grow"><h1></h1></div>
            <div className="flex-grow"><h1></h1></div>
            <div className="flex-grow"><h1></h1></div>
            <div className="flex-grow"><h1></h1></div>
            <div className="flex-grow"><h1></h1></div><div className="flex-grow"><h1></h1></div><div className="flex-grow"><h1></h1></div><div className="flex-grow"><h1></h1></div>
            <div className="flex-grow"><h1></h1></div><div className="flex-grow"><h1></h1></div><div className="flex-grow"><h1></h1></div><div className="flex-grow"><h1></h1></div><div className="flex-grow"><h1></h1></div>
           <div className="flex-grow"> <Link href="/about"><h1 className="font-sans font-bold text-lg mt-2">About</h1></Link></div>
            <div className="flex-grow"> <Link href="/contactUs"><h1 className="font-sans font-bold text-lg mt-2">Contact Us</h1></Link></div>
            <div className="flex-grow"><button className="font-sans font-bold text-lg mt-2 relative inline-block"><Link href="/login">
            <div className="shadow-lg">
                Account
                </div>    
            </Link></button></div>

            */}
        
            <nav>
            <ul className=' text-end p-4 list-none bg-white font-mono'>
                <li className='inline text-black m-3'>
                Home
                </li>
                <li className='inline text-black m-3'>About</li>
                <li className='inline text-black m-3'><Link href={'/contactUs'}>Contact Us</Link></li>
            </ul>
        </nav>
    </>)
}