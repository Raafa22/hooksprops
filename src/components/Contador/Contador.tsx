import { useState } from 'react'
import './Contador.css'

function Contador() {
 //useState = cria uma variavel de estado
 const[numero,setNumero] = useState(0)

 function somaMaisum(){
    setNumero(numero+1)
 }

   return (
    <div className="container">
        <p>O valor é: {numero }</p>
        <button onClick={somaMaisum}>Adicionar +1</button>
    </div>
  )
}

export default Contador