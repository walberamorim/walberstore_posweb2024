import Header from './Components/Header'
import Pesquisar from './Components/Pesquisar'
import UltimosLancamentos from './Components/UltimosLancamentos'
import styled from 'styled-components'


const AppContainer = styled.div `
   
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
  `;

function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisar/>
      <UltimosLancamentos/>
    </AppContainer>
  )
}

export default App
