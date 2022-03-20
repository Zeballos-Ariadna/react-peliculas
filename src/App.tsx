//import React, { useEffect, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import './App.css'
import MostrarTexto from './MostrarTexto';
//import ProyectarContenido from './ProyectarContenido';
//import ProyectarContenido2 from './ProyectarContenido2';
//import EjemploReloj from './ejemploReloj';
import ContenidoDinamico from './ContenidoDinamico';
import FormularioTexto from './FormularioTexto';
import EjemploUseEffect from './EjemploUseEffect';
import ValorContext from './ValorContext';
import Abuelo from './Abuelo';
import ErrorBoundary from './ErrorBoundary';

function App() {//Componente funcional,nomComp: App

  //let texto="";

  const [texto, setTexto] = useState('Valor por defecto');
  const[checked,setChecked]= useState(true);


  //const imagenURL ="https://sc04.alicdn.com/kf/U0721a48732814105aae97d2245765dd2a.png";

  //const manejarClick = () => console.log('click');

  const manejarKeyUp= (textoInput: string) => {
    console.log(textoInput);//Obtenemos lo que el usuario esta escribiendo
    //texto=e.currentTarget.value; //variable que contiene lo que el usuario esta escribiendo
    setTexto(textoInput);//actualiza el estado de la componente
  }

  /*const parteIntermedia=<EjemploReloj />

  const estilo={
    backgroundColor: 'red',width: '50px',height:'50px',marginLeft: '1rem'
  }

  const parteInferior=<div style={estilo}></div>*/

  const calificaciones=[
    {nombre: 'Felipe', calificacion: 75},
    {nombre: 'Claudia', calificacion: -1},
    {nombre: 'Enzo', calificacion: 85}
  ]

  return (
    <div>
      
      <h1 className="rojo">Hola mundo!</h1>

      {calificaciones.map(cal =>
      <ErrorBoundary key={cal.nombre}>
        <ContenidoDinamico  {...cal}/>
      </ErrorBoundary>
         )}
      

      {/*<ValorContext.Provider value={texto}>
        <Abuelo />
      </ValorContext.Provider>

      <div>
        <input type="checkbox" 
        onChange={(e) => setChecked(e.currentTarget.checked)}
        checked={checked} /> Mostrar componente useEffect
      </div>

      {checked ? <EjemploUseEffect /> : null}*/ }


      {/*<ProyectarContenido>
        <>
          <span>hola proyectando contenido</span>
          <img alt="logo React" src={imagenURL} />
        </>
        
  </ProyectarContenido>

      <ProyectarContenido2
        //parteSuperior={<h3>Esta es la parte de arriba</h3>}
        parteSuperior={<span>Este es un mensaje del componente padre</span>}
        parteIntermedia={parteIntermedia}
        parteInferior={parteInferior}
      />*/}
      
      <button 
      onMouseEnter={()=>console.log('entrando')}
      onClick={() => console.log('click desde el botón')}>Clickeame</button>
      <br></br>

      <FormularioTexto manejarKeyUp={(e: string) => manejarKeyUp(e)}/>

      <MostrarTexto texto={texto} />
      
      <br></br>

      
      <div>
        <input type="checkbox" 
        onChange={(e) => setChecked(e.currentTarget.checked)}
        checked={checked} /> Este es un checkbox
      </div>
    </div>
  );
}

export default App;
