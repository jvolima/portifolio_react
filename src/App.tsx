import { Apresentacao } from "./components/Apresentacao"
import { Contatos } from "./components/Contatos"
import { Header } from "./components/Header"
import { SobreMim } from "./components/SobreMim"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <>
      <Header />
      <Apresentacao />
      <SobreMim />
      <Contatos />
      <GlobalStyle />
    </>
  )
}

export default App
