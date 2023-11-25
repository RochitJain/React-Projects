import Navbar from "./component/navbar"
import image from "./images/sale.jpg"

export default function Home() {
    return (
    <>
    <Navbar/>
        <div className="flex flex-col justify-between bg-gradient-to-br from-white to-blue-300">
            <div className="h-1/2"><img src={image.src} className="w-full"/>
            </div>
            <div className="flex flex-row justify-evenly" >
                <div className="p-3 h-30 w-10 border border-black">1</div>
                <div className="p-3 h-10 w-10 border border-black">2</div>
                <div className="p-3 h-10 w-10 border border-black">3</div>
                <div className="p-3 max-h-full w-10 border border-black">4</div>
                <div className="p-3 h-10 w-10 border border-black">5</div>
                <div className="p-3 h-10 w-10 border border-black">6</div>
            </div>
       
        </div>
    </>
    )
  }