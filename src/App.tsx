import { Apresentacao } from "./components/Apresentacao"
import { Contatos } from "./components/Contatos"
import { Header } from "./components/Header"
import { Projetos } from "./components/Projetos"
import { SobreMim } from "./components/SobreMim"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <>
      <Header />
      <Apresentacao />
      <SobreMim />
      <Contatos />
      <Projetos />
      <GlobalStyle />
    </>
  )
}

export default App
