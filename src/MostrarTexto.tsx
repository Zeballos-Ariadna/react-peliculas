export default function MostrarTexto(props: any){
    return(
        <div>
            {props.texto}
        </div>
    )
}

interface mostrarTextoProps {
    texto: string;
}

MostrarTexto.defaultProps = {
    texto: 'valor por defecto defaultProps'
}