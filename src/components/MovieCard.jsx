import { Link } from "react-router-dom";

export default function MovieCard({id, titulo, imagem_destaque}) {
    return(
        <div className="flex">
            <h2>{titulo}</h2>
            <img src={imagem_destaque}/>
            <Link to={`/detalhes/${id}`}>Saber Mais</Link>
        </div>
    )

}