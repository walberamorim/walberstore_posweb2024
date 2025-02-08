import './style.css';
import Input from '../Input'
import styled from 'styled-components'
import {useState} from 'react'
import Livros from '../Pesquisar/dadosPesquisa'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%,
    #326589);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`


const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;`

function Pesquisar(){
    const [resultado, setResultado] = useState([]);
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começa?</Titulo>
            <Subtitulo>Encontre seu produto.</Subtitulo>
            <Input placeholder="Digite aqui" onBlur={evento => {
                const textoDigitado = evento.target.value;
                const resultadoPesquisa = Livros.filter(livro => livro.nome.toLowerCase().includes(textoDigitado.toLowerCase()));
                setResultado(resultadoPesquisa);
                }}/>
            <p>{resultado.map(livro => livro.nome + ' | ')}</p>
        </PesquisaContainer>
    )
}

export default Pesquisar