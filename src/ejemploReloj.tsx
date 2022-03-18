import { useEffect, useState } from "react";

export default function EjemploReloj(){
    const [fecha, setFecha]=useState(new Date());

    useEffect(() => {
        const timerId= setInterval(() => {
        setFecha(new Date());//Invocamos setFecha una vez por segundo
        }, 1000);
        return () => clearInterval(timerId);//Limpiar componente timerId
    }, [])
    return(
        <div className='App'>
            <h3>Ejemplo React</h3>
            {console.log("esta aca")}
            <input placeholder='Input tiempo' />
            <div>${fecha.toString()}</div>
        </div>
    )
}