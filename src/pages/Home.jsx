import CardContainer from "../components/CardContainer";
<<<<<<< HEAD
import MovieCard from "../components/MovieCard";
import movies from "../data/movies.json";
export default function Home() {

    return (
        <>
            <CardContainer titulo="Filmes antigos">
                {
                    movies
                        .filter(filme => (filme.ano_lancamento < 2000))
                        .map(filme => (
                            <MovieCard key={filme.id} {...filme} />
                        ))
                }
            </CardContainer>

        </>
=======
import movies from "../data/movies.json";
import MovieCard from"../components/MovieCard";

export default function Home(){
    console.log(movies)
    return(
     <CardContainer titulo="Filmes Antigos">
        {
             movies
             .filter(filme => filme.ano_lancamento < 2000)
            .map( filme => (
                <MovieCard key={filme.id} {...filme}/>
            ))
        }
       
     </CardContainer>
        
>>>>>>> be6aaa8e68142c9bb4cc9e3cf0e3a17d1c3b1199
    )
}