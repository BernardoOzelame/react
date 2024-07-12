import { useState } from "react";
import { useEffect } from "react";

export const Cidades = ({ estadoSelecionado, cidade, setCidade }) => {
    const [loading, setLoading] = useState(true)
    const [cidades, setCidades] = useState([])

    const handleCidadeChange = (event) => {
        setCidade(event.target.value)
    }

    useEffect(() => {
        const carregaCidades = async () => {
            setLoading(true)
            const resposta = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`)
            const dados = await resposta.json();
            setCidades(dados)
            setLoading(false)
        }
        carregaCidades()
    }, [estadoSelecionado])

    return (
        <select value={cidade} disabled={estadoSelecionado === "" || loading} onChange={handleCidadeChange}>
            <option value="">{estadoSelecionado === "" ? 'Selecione um estado' : loading ? 'Aguarde...' : 'Selecione uma cidade'}</option>
            {cidades.map(cidade => (
                <option key={cidade.nome} value={cidade.nome}>
                    {cidade.nome}
                </option>
            ))}
        </select>
    )
}