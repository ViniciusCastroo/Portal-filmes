import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import movies from "../data/movies.json"
import { data } from "autoprefixer"

export default function MovieListPage() {

    const [search, setSearch] = useState("")
    const[filmes, setfilmes] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br').then(res => res.json())
        .then(data => setfilmes(data.results))
        .catch(erro => console.log(erro))
        .finally(() => console.log("Fim"))
    },[])
    

    console.log(filmes)

    const handleSearch = (event) => {
        setSearch(event.target.value)
        console.log(search)
    }

    const filmesFiltrados = movies.filter(filme => filme.titulo.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <h2>Veja o catálogo completo de filmes</h2>
            <input
                className="text-black"
                type="text"
                id="search"
                value={search}
                onChange={handleSearch}
            />
            <section className="flex">
                {
                   filmes.map(filme => (
                    <>
                        <h1>{filme.title}</h1>
                        <p>{filme.vote_average}</p>
                        <img src={`https://image.tmdb.org/t/p/w1280${filme.backdrop_path}`} alt={filme.title}/>
                        <img src={`https://image.tmdb.org/t/p/w154${filme.poster_path}`} alt={filme.title}/>
                    </>
                   ))
                }
            </section>
        </>
    )
}

