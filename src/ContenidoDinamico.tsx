export default function ContenidoDinamico(props:any){
    //Ej1: Operador Ternario
    /*return (
        <div>
            {props.mostrarMensajeSecreto ? <span>Mensaje Secreto: 42</span> : null}
        </div>
    )*/

    //Ej2: if
    if(props.calificacion > 90){
        return(
            <div>
                <h3>{props.nombre}: Excelente calificacion</h3>
            </div>
        )
    }else if(props.calificacion >= 80 && props.calificacion <= 90){
        console.log('primer if');
        return(
            <div>
                <h3>{props.nombre}: Muy bien hecho</h3>
            </div>
        )
    }else if(props.calificacion >= 0 && props.calificacion < 80){
        return(
            <div><h3>{props.nombre}: lol......</h3></div>
        )
    } else{
        throw `Ha habido un error con la calificación de ${props.nombre}`;
    }
}