import { useState } from 'react'
import './lista.css'


const Lista = () => {
    const [fruta, setFruta] = useState('')

    const onChangeFruta = evento => {
        setFruta(evento.target.value) // do evento, pega o input (target) e o valor que foi digitado (value)
    }


    const [frutas, setFrutas] = useState(['Banana'])


    const addFruta = (evento) => {
        evento.preventDefault()
        // Colocar em ordem alfabética:
        // -------------------------------------
        const idx = frutas.findIndex(f => f.toLocaleLowerCase() > fruta.toLocaleLowerCase())
        let f = [...frutas] // cópia de uma variável
        f.splice(idx < 0 ? f.length : idx, 0, fruta)
        // -------------------------------------
        setFrutas(f)
        setFruta("")
    }

    const removerFruta = (fruta) => {
        setFrutas(frutas.filter(f => f !== fruta))
    }

    return <div>
        <ul>
            {frutas.map((fruta, indice) =>
                <li 
                    className='stylePadrao liFrutas'
                    key={indice}>
                        <span>{fruta}</span>
                        <button type='button' onClick={() => removerFruta(fruta)}>
                            X
                        </button>
                </li>)}
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