import './style.css';
import sacola from '../../imagens/sacola.svg';
import perfil from '../../imagens/perfil.svg';
const imagens = [sacola, perfil];
import styled from 'styled-components'


const OpcoesIconesContainer = styled.ul `
    display: flex;
  `;
  const OpcaoIconesContainer = styled.li `
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
  `;

function Icones() {
    return (
        <OpcoesIconesContainer>
        {
          imagens.map((img) =>(
            <OpcaoIconesContainer key={img}>
            <img src={img}/>
          </OpcaoIconesContainer>
          ))
        }
        </OpcoesIconesContainer>
    )
}
export default Icones