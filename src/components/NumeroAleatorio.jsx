import { useState } from "react"


const NumeroAleatorio = () => {
    const [controle, setControle] = useState(null)
    const [num, setNum] = useState(0)
    const [backgroundColor, setBackgroundColor] = useState('red')


    const gerarAleatorio = () => {
        const numGerado = Math.round(Math.random() *100)

        if (numGerado < 10) {
            setNum('0' + numGerado)
        } else {
            setNum(numGerado)
        }
        // usando IF Ternário: setNum((numGerado < 10 ? '0' : '') + numGerado)
    }


    const trocarFundo = () => {
        const numAleatorio1 = Math.round(Math.random() *255)
        const numAleatorio2 = Math.round(Math.random() *255)
        const numAleatorio3 = Math.round(Math.random() *255)
        setBackgroundColor('rgb(' + numAleatorio1 + ',' + numAleatorio2 + ',' + numAleatorio3 + ')')
    }


    const iniciar = () => {
        setControle(setInterval(trocarFundo, 1000))
    }


    const parar = () => {
        clearInterval(controle)
    }


    return (
        <>
            <div style={{backgroundColor, padding: '10px', marginLeft: '20px', borderRadius: '8px', color: 'white'}}>{num}</div>
            <button style={{padding: '10px', marginTop:'10px', marginLeft: '20px', borderRadius: '8px'}} onClick={gerarAleatorio} type="button">Gerar Número</button>
            <button style={{padding: '10px', marginTop:'10px', marginLeft: '20px', borderRadius: '8px'}} onClick={iniciar} type="button">Iniciar</button>
            <button style={{padding: '10px', marginTop:'10px', marginLeft: '20px', borderRadius: '8px'}} onClick={parar} type="button">Parar</button>
        </>
    )
}

export default NumeroAleatorio