import HelloWorld from './components/HelloWorld'
import NumeroAleatorio from './components/NumeroAleatorio'
import Formulario from './components/Formulario'
import Lista from './components/Lista'

function App() {
  return (
    <>
      <Formulario />
      <HelloWorld name='Beernardo' />
      <NumeroAleatorio />
      <Lista />
    </>
  )
}

export default App
