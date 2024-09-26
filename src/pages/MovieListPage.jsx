import { useState } from "react"

export default function MovieListPage(){

    const [contador, setContador] = useState(0)

    const handleClick = () => {
        setContador((prev) => prev + 1)
        contador++
        console.log(contador)
    }

    return(
        <>
            <p> {contador} </p>
            <button onClick={handleClick}>Aumentar</button>
        </>
    )
}
