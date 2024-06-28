import { useState } from 'react';
import './formulario.css'

const Formulario = () => {
    
    const [estouDigitando, setEstouDigitando] = useState(false)
    const [controle, setControle] = useState(null)
    const [pessoa, setPessoa] = useState({
        nome: '',
        email: '',
        idade: '',
        // outros campos virão aqui. Exemplo: numero: '', etc...
    })

    // isso (abaixo) foi substituído pela função onChenge()
    // const [nome, setNome] = useState('')
    // const [email, setEmail] = useState('')
    // const onChangeNome = evento => {
    //     digitando()
    //     setNome(evento.target.value) // do evento, pega o input (target) e o valor que foi digitado (value)
    // } 
    // const onChangeEmail = evento => {
    //     digitando()
    //     setEmail(evento.target.value) // do evento, pega o input (target) e o valor que foi digitado (value)
    // } 


    const onChange = ({name, value}) => {
        setPessoa({...pessoa, [name]: value})
    }


    const digitando = () => {
        setEstouDigitando(true)
        clearInterval(controle)
        setControle(setTimeout(() => setEstouDigitando(false), 2000))
    }


    const enviarDados = () => {
        console.log(pessoa)
    }


    const onSubmitForm = (evento) => {
        evento.preventDefault()
        enviarDados()
    }


    return <form onSubmit={onSubmitForm}>
        <div className='digitando stylePadrao' style={{display: estouDigitando ? 'block' : 'none'}}>Estou digitando...</div>
        <input 
            value={pessoa.nome}
            onChange={({target}) => onChange(target)}
            type="text" 
            name="nome" 
            id="nome"
            className='stylePadrao'
        />

        <input 
            value={pessoa.email}
            onChange={({target}) => onChange(target)}
            type="email" 
            name="email" 
            id="email"
            className='stylePadrao'
        />

        <input 
            value={pessoa.idade}
            onChange={({target}) => onChange(target)}
            type="number" 
            name="idade" 
            id="idade"
            className='stylePadrao'
        />  

        <button type="submit">Enviar</button>
    </form>
}


export default Formulario