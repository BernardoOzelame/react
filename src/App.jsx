import {useState} from "react"
import HelloWorld from './components/HelloWorld'
import NumeroAleatorio from './components/NumeroAleatorio'
import Formulario from './components/Formulario'
import Lista from './components/Lista'
import {Cidades} from './components/Cidades'
import {Estados} from './components/Estados'

function App() {
  const [estado, setEstado] = useState("")
  const [cidade, setCidade] = useState("")

  const setEstadoSelecionado = async (estado) => {
    setEstado(estado)
    setCidade("")
  }

  return (
    <>
      {/* <Formulario />
      <HelloWorld name='Beernardo' />
      <NumeroAleatorio />
      <Lista /> */}
      <Estados estado={estado} setEstado={setEstadoSelecionado}/>
      <Cidades estadoSelecionado={estado} cidade={cidade} setCidade={setCidade} />
      {
        cidade !== "" && 
        <span>
          <p>Você selecionou</p>
          <b>{cidade} - {estado}</b>
        </span>
      }
      
    </>
  )
}

export default App
