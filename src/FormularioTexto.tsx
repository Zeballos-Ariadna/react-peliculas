export default function FormularioTexto(props: formularioTextoProps){
    return(
        <input type="text"
        onKeyUp={(e) => props.manejarKeyUp(e.currentTarget.value)}//onKeyUp: Invoca a la funcion que viene a través del props.
        //con onKeyUp ejecuta le manda un msj al componente padre (App.tsx/formularioTexto) y le manda un valor
        //Caja de texto
      />
    )
}

interface formularioTextoProps {
    manejarKeyUp(text: string): void;
}
