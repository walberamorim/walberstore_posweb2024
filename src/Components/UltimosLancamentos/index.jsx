import './style.css';
import Livros from '../UltimosLancamentos/dadosUltimosLancamentos';
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
background-color: #EBECEE;

    padding-bottom: 20px;

    display: flex;

    flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`;

const Titulo = styled.h2`width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color:${props => props.cor || '#EB9B00'};
    font-size: 36px;
    text-align: center;
    margin: 0;
`;

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor="#000">ULTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                {Livros.map(livro => (
                    <img key={livro.id + 'img'} src={livro.src} alt={livro.nome}></img>
                ))}
            </NovosLivrosContainer>
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos