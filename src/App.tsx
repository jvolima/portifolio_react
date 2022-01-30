import { Apresentacao } from "./components/Apresentacao"
import { Header } from "./components/Header"
import { SobreMim } from "./components/SobreMim"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <>
      <Header />
      <Apresentacao />
      <SobreMim />
      <GlobalStyle />
    </>
  )
}

export default App
