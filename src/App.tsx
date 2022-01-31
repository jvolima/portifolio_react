import { Apresentacao } from "./components/Apresentacao"
import { Contatos } from "./components/Contatos"
import { Header } from "./components/Header"
import { Projetos } from "./components/Projetos"
import { Rodape } from "./components/Rodape"
import { Servicos } from "./components/Servicos"
import { Skills } from "./components/Skills"
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
      <Servicos />
      <Skills />
      <Rodape />
      <GlobalStyle />
    </>
  )
}

export default App
