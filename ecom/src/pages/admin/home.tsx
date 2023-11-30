export default function Home() {

    const name = localStorage.getItem('name')


    return(<>
    <h1 className="text-6xl text-teal-950 text-center">Welcome {name}</h1>
    </>)
}