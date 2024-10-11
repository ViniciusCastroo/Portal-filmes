import { Link } from "react-router-dom";

<<<<<<< HEAD
export default function MovieCard({ id, titulo, imagem_destaque }) {
    return (
        <div>
            <h2>{titulo}</h2>
            <img src={imagem_destaque} />
            <Link to={`/movies/${id}`}>Saber mais</Link>
=======
export default function MovieCard({id, titulo, imagem_destaque}) {
    return(
        <div className="flex">
            <h2>{titulo}</h2>
            <img src={imagem_destaque}/>
            <Link to={`/detalhes/${id}`}>Saber Mais</Link>
>>>>>>> be6aaa8e68142c9bb4cc9e3cf0e3a17d1c3b1199
        </div>
    )

}