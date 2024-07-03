import HelloWorld from './components/HelloWorld'
import NumeroAleatorio from './components/NumeroAleatorio'
import Formulario from './components/Formulario'
import Lista from './components/Lista'
import Cidade from './components/Cidade'

function App() {
  return (
    <>
      <Formulario />
      <HelloWorld name='Beernardo' />
      <NumeroAleatorio />
      <Lista />
      <Cidade />
    </>
  )
}

export default App
