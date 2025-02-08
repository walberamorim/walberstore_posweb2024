import './style.css';
import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import Livros from '../Pesquisar/dadosPesquisa'

const ResultadoContainer = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }`;

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

function Pesquisar() {
    const [resultado, setResultado] = useState([]);
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começa?</Titulo>
            <Subtitulo>Encontre seu produto.</Subtitulo>
            <Input placeholder="Digite aqui" onChange={evento => {
                const textoDigitado = evento.target.value;

                const resultadoPesquisa = Livros.filter(livro => livro.nome.toLowerCase().includes(textoDigitado.toLowerCase()));
                setResultado(resultadoPesquisa);
                if (!textoDigitado || textoDigitado === '') {
                    setResultado([]);
                }
            }} />
            <div>{resultado.map(livro => (
                <ResultadoContainer key={livro.id + 'div'}>
                    <p key={livro.id + 'p'}>{livro.nome}</p>
                    <img key={livro.id + 'img'} src={livro.src} alt={livro.nome}></img>
                </ResultadoContainer>))}
            </div>
        </PesquisaContainer>
    )
}

export default Pesquisar