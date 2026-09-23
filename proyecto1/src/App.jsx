import { useEffect,useState } from "react";


function App() {
  //iniciamos con un estado para un arreglo
  const [elementos,setElementos]=useState([]);

  //crear funcionpara agg datos 
  const agregarDatos=()=>{
    const nuevoNumero=Math.floor(Math.random()*50);
    setElementos([...elementos, nuevoNumero]);
  }
  
  //metodo para recorrer el arreglo
  //elementos.forEach(recorrido=>console.log(recorrido))
  const recorrerArreglo=(elementos,index)=>(
    <li key={index} style={{margin: `5px 0`,
      fontsize:`18px`}}>
        Elemento #{index+1}<strong>{elementos}</strong>
      </li>
  )



  //hook de efecto
  useEffect(()=>{
    console.log("El arreglo de datos actual es : ",elementos)
  },[elementos])

  //inicia el return 
  return (
    <>
    <h1>Mi primer arreglo de datos</h1>
    <div style={{padding:`20px`}}>
      <h2>Paso 1: Agregar datos al arreglo</h2>
      <button onClick={agregarDatos}>Agregar un numero aleatorio</button>
      <ul>
        {/*si el arreglo esta vacio enviar un mensaje*/}

        {elementos.length===0 ?(
          <>
          <p>aun no hay elementos en el arreglo</p>
          <p>presiona el boton</p>
          </>
          
        ):(elementos.map(recorrerArreglo))}
      </ul>
    </div>
    </>
  )
}

export default App

