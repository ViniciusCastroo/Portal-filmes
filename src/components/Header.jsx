import{NavLink} from "react-router-dom";


export default function Header(){
    return(
        <>
            <header className="bg-blue-500 text-white flex justify-around h-12 items-center">
                <div>
                    <h1>Portal Filmes</h1>
                </div>
                <nav>
                    <ul className="flex gap-5">
                        <li><NavLink to = "/"> Home </NavLink></li>
                        <li><NavLink to = "/generos"> Genero-Filmes </NavLink></li>
                        <li><NavLink to = "/filmes"> Filmes </NavLink></li>

                    </ul>
                </nav>
            </header>
        </>
    )
}
