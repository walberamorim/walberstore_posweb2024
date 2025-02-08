import './style.css';
const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];
import styled from 'styled-components'


const OpcoesMenuContainer = styled.ul `
    display: flex;
  `;
  const OpcaoMenuContainer = styled.li `
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

function Menu() {
    return (
        <OpcoesMenuContainer>
        {
          textoOpcoes.map((texto) =>(
            <OpcaoMenuContainer key={texto}>
            <p>{texto}</p>
          </OpcaoMenuContainer>
          ))
          
        }
        </OpcoesMenuContainer>
    )
}
export default Menu
