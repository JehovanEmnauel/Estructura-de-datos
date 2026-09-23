import {useState} from 'react'


function pila() {
    const [stack, setStack]= useState([]);
    const [inputValue, setInputValue]=useState("")

    //agrgar valores a la pila o arreglo
    const handlePush=(e)=>{
        e.preventDefault()
        if(inputValue.trim()==="") return;
        setStack([inputValue, ...stack])
        setInputValue(``)

    }

    //Eliminar valores del arreglo .pop
    const handlePop=()=>{
        if(stack.length===0) return;

        //Filtrar los elemtos y elimanr el tope de la pila
        const nuevoStack=stack.slice(1)
        setStack(nuevoStack)
    }

    const elementoTope=stack.length>0 ? stack[0]: `La pila esta vacia, checa eso`

  return (
    <>
    <div style={{padding: `20px`, fontFamily:`Arial, sans-serif`, maxWidth:`400px`, margin:`0 auto`}}>
    <h2>Visialuzar los datos de la pila</h2>
    {/*Inicializamos el formulario*/}
    <form>
        <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}  placeholder='introduce un datp' style={{padding: `8px`, marginRight:`10px`}}/>
        <button type='submit' styile={{padding: `8px 12px`, background: '#4CAF50' }}>
            push
        </button>
    </form>
    </div>

    </>
  )
}

export default pila