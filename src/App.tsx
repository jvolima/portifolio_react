import { useState } from "react"
import { Presentation } from "./components/Presentation"
import { Header } from "./components/Header"
import { Projects } from "./components/Projects"
import { Footer } from "./components/Footer"
import { Services } from "./components/Services"
import { Skills } from "./components/Skills"
import { About } from "./components/About"
import { GlobalStyle } from "./styles/global"
import { Contacts } from "./components/Contacts"
import { ContactModal } from "./components/Presentation/ContactModal"

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  function handleOpenContactModal() {
    setIsContactModalOpen(true); 
  }

  function handleCloseContactModal() {
    setIsContactModalOpen(false);
  }

  return (
    <>
      <Header />
      <Presentation  handleOpenContactModal={handleOpenContactModal}/>
      <ContactModal isOpen={isContactModalOpen} onRequestClose={handleCloseContactModal} />
      <About />
      <Contacts />
      <Projects />
      <Services />
      <Skills />
      <Footer />
      <GlobalStyle />
    </>
  )
}

export default App
