import React, { ReactElement } from "react";

export default class ErrorBoundary extends React.Component<errorBoundaryProps,errorBoundaryState> {
    constructor(props: errorBoundaryProps){
        super(props);//para trabajar con la clase base
        this.state = {hayError: false, mensaje: ''}
    }

    componentDidCatch(error: any, errorInfo: any){//se ejecuta si hay un error en el componente
        console.log(error);
        console.log(errorInfo);
    }

    static getDerivedStateFromError(error: any){
        console.log(error);
        return {hayError: true, mensaje: error};
    }

    render() {//Determinamos que se va a renderizar
        if(this.state.hayError){
            if(this.props.errorUI){
                return this.props.errorUI
            }else{
                console.log('entro');
                return <h3>{this.state.mensaje}</h3>//mensaje por defecto
            }
        }

        return this.props.children;//en el caso de que no haya error y muestre lo que se debía mostrar en 1er lugar
    }
}   

interface errorBoundaryState{
    hayError: boolean;
    mensaje:string;
}

interface errorBoundaryProps{
    errorUI?: ReactElement
}