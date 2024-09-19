import CardContainer from "../components/CardContainer";
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
        
    )
}