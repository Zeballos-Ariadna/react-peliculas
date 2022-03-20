import {useEffect, useState} from "react"

export default function EjemploUseEffect(){
    
    const[clicks,setClicks]= useState(0);
    const[fecha,setFecha]= useState(new Date()); 

    useEffect(() => {
        console.log('useEffect del click');
        document.title= `${clicks} veces`

        return()=>{
            //se ejecuta al destruir el componente 
            //Permite hacer una limpieza
            console.log('El componente se va a destruir')
        }
    }, [clicks])
    
    useEffect(() => {
        console.log('useEffect del interval');
        const intervalId= setInterval(() => {//ejecutamos una función por segundo
            setFecha(new Date())//actualizar la fecha actual una vez por segundo
        },1000)

        return () => clearInterval(intervalId);//Limpiar los recursos
    })

    useEffect(() => {
        console.log('Ejecutarme 1 vez');
    }, [])

    return(
        <>
            <button onClick={()=> setClicks(clicks+1)}>
                Me has clickeado {clicks} veces</button>

            <div>
                {fecha.toString()}
            </div>
        </>
    )
}

