import { useState } from "react"


const NumeroAleatorio = () => {
    const [controle, setControle] = useState(null)
    const [num, setNum] = useState(0)
    const [backgroundColor, setBackgroundColor] = useState('green')


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
        // if(controle === null){
        //     setControle(setInterval(trocarFundo, 1000))
        // }

        if (controle !== null) {
            parar()
        }
        setControle(setInterval(trocarFundo, 1000))
    }


    const parar = () => {
        clearInterval(controle)
        setControle(null)
    }

    
    return (
        <>
            <div style={{backgroundColor, color: 'white'}} className="numAleatorio stylePadrao">{num}</div>
            <button className="stylePadrao" onClick={gerarAleatorio} type="button">Gerar Número</button>
            <button className="stylePadrao" onClick={iniciar} type="button">Iniciar</button>
            <button className="stylePadrao" onClick={parar} type="button">Parar</button>
        </>
    )
}

export default NumeroAleatorio