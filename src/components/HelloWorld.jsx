import { React } from "react"; // em arquivos .jsx não é preciso esta linha, mas é opcional (normalmente em arquivos .js é obrigatório se estiver desenvolvendo em React)
import './estilo.css';

const style = {
    color:'white', 
    backgroundColor:'black',
    padding: '10px',
    marginLeft: '20px',
    borderRadius: '8px',
}

const HelloWorld = (props) => { // pode vir como ({name, ...}) (no lugar de props) -> aí não necessita da linha abaixo :)
    const {name} = props // desestruturação de um objeto
    return <p style={style} className="hello-world">Hello, {name}! </p> // o style, se quiser colocar direto na tag, deve ser da seguinte forma: style={{prop1:'xxx',prop2:'xxx', ...}}
}

export default HelloWorld

// export default {funcao1, funcao 2, ...}