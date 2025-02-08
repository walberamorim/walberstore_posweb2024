import './style.css';
import Logo from '../../Components/Logo'
import Menu from '../../Components/Menu'
import Icones from '../../Components/Icones'
import styled from 'styled-components'


const HeaderContainer = styled.div `
    background-color: #FFF;
    display: flex;
    justify-content: center;
  `;

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <Menu />
            <Icones />
        </HeaderContainer>
    )
}

export default Header