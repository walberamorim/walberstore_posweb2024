import logo from '../../imagens/logo.svg';
import './style.css';
import styled from 'styled-components'


const LogoContainer = styled.div `
    display: flex;
    font-size: 30px;
  `;
function Logo() {
    return (
        <LogoContainer>
        <img className="logo-image" src={logo} alt="logo"></img>
        <p><strong>Walber</strong> Store</p>
        </LogoContainer>
    )
}
export default Logo 