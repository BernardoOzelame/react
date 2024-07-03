import { useState } from 'react';
import './formulario.css'

const Cidade = () => {
    
    const [estouDigitando, setEstouDigitando] = useState(false)
    const [controle, setControle] = useState(null)
    const [cidade, setCidade] = useState({
        cidade: '',
    })


    const onChange = ({name, value}) => {
        digitando()
        setCidade({...cidade, [name]: value})
    }


    const digitando = () => {
        setEstouDigitando(true)
        clearInterval(controle)
        setControle(setTimeout(() => setEstouDigitando(false), 2000))
    }


    const enviarDados = () => {
        console.log(cidade)
    }


    const onSubmitForm = (evento) => {
        evento.preventDefault()
        enviarDados()
    }


    return <form onSubmit={onSubmitForm}>
        <div className='digitando stylePadrao' style={{display: estouDigitando ? 'block' : 'none'}}>Estou digitando...</div>
        <input 
            value={cidade.cidade}
            onChange={({target}) => onChange(target)}
            type="text" 
            name="cidade" 
            id="cidade"
            className='stylePadrao'
        />

        <button type="submit">Enviar</button>
    </form>
}


export default Cidade