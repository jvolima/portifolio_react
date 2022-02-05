import { useState } from "react"
import { Apresentacao } from "./components/Apresentacao"
import { ContactModal } from "./components/ContactModal"
import { Contatos } from "./components/Contatos"
import { Header } from "./components/Header"
import { Projetos } from "./components/Projetos"
import { Rodape } from "./components/Rodape"
import { Servicos } from "./components/Servicos"
import { Skills } from "./components/Skills"
import { SobreMim } from "./components/SobreMim"
import { GlobalStyle } from "./styles/global"

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  function handleOpenContactModal() {
    console.log("modal aberto")
    setIsContactModalOpen(true); 
  }

  function handleCloseContactModal() {
    setIsContactModalOpen(false);
  }

  return (
    <>
      <Header />
      <Apresentacao  handleOpenContactModal={handleOpenContactModal}/>
      <ContactModal isOpen={isContactModalOpen} onRequestClose={handleCloseContactModal} />
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
