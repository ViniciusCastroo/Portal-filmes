<<<<<<< HEAD
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";

export default function Header() {

    const [isLogged, setIsLogged] = useState(false)

    const handleLogin = () => {
        setIsLogged(!isLogged)
    }

    return (
        <>
            <header className="bg-purple-800 flex text-white justify-around h-14 items-center">
=======
import{NavLink} from "react-router-dom";


export default function Header(){
    return(
        <>
            <header className="bg-blue-500 text-white flex justify-around h-12 items-center">
>>>>>>> be6aaa8e68142c9bb4cc9e3cf0e3a17d1c3b1199
                <div>
                    <h1 className="font-bold">Portal Filmes</h1>
                </div>
                <nav>
<<<<<<< HEAD
                    <ul className="flex gap-4">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/movies">Filmes</NavLink></li>
                        <li><NavLink to="/genre">Gêneros</NavLink></li>
                        <li><NavLink to="/contato">Contato</NavLink></li>
                        {isLogged && <li><NavLink to="/settings">Configurações</NavLink></li>}
=======
                    <ul className="flex gap-5">
                        <li><NavLink to = "/"> Home </NavLink></li>
                        <li><NavLink to = "/generos"> Genero-Filmes </NavLink></li>
                        <li><NavLink to = "/filmes"> Filmes </NavLink></li>

>>>>>>> be6aaa8e68142c9bb4cc9e3cf0e3a17d1c3b1199
                    </ul>
                </nav>
                <Login isLogged={isLogged} handleLogin={handleLogin} />
            </header>
        </>
    )
}
