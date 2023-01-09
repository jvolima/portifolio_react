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

function App() {
  return (
    <>
      <Header />
      <Presentation/>
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
