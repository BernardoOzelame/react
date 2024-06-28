import { useState } from 'react'
import './lista.css'


const Lista = () => {
    const [fruta, setFruta] = useState('')

    const onChangeFruta = evento => {
        setFruta(evento.target.value) // do evento, pega o input (target) e o valor que foi digitado (value)
    }


    const [frutas, setFrutas] = useState([
        'Maçã', 'Banana', 'Laranja', 'Limão'
    ])


    const addFruta = (evento) => {
        evento.preventDefault()
        setFrutas([...frutas, fruta])
        setFruta("")
    }

    return <div>
        <ul>
            {frutas.map((fruta, indice) => <li className='stylePadrao' key={indice}>{fruta}</li>)} {/* map(): passar em todas as posições do vetor e modificar seus valores*/}
        </ul>
        <form onSubmit={addFruta}>
            <input 
                value={fruta}
                onChange={onChangeFruta}
                type="text" 
                name="fruta" 
                id="fruta"
                className='stylePadrao'
            />
            <button disabled={fruta === ""} type="submit">Adicionar fruta</button>
        </form>
    </div>
}


export default Lista