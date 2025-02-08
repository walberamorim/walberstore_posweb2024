import Header from './Components/Header'
import Pesquisar from './Components/Pesquisar'
import styled from 'styled-components'


const AppContainer = styled.div `
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
  `;

function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisar/>
    </AppContainer>
  )
}

export default App
