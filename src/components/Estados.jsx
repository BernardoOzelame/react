import { useState } from "react";
import { useEffect } from "react";

export const Estados = ({estado, setEstado}) => {
    const [loading, setLoading] = useState(true)
    const [estados, setEstados] = useState([])

    const handleEstadoChange = (event) => {
        setEstado(event.target.value)
    }

    useEffect(() => {
        const carregaEstados = async () => {
            setLoading(true)
            const resposta = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
            const dados = await resposta.json();
            setEstados(dados)
            setLoading(false)
        }
        carregaEstados()
    }, [])

    return (
        <select disabled={loading} value={estado} onChange={handleEstadoChange}>
            <option value="">{loading ? 'Aguarde...' : 'Selecione um estado'}</option>
            {estados.map(estado => (
                <option key={estado.sigla} value={estado.sigla}>
                    {estado.nome}
                </option>
            ))}
        </select>
    )
};
