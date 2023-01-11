import { useState } from 'react'
import imageSvg from '../../assets/image.svg'
import { ContactModal } from './ContactModal'
import { Container } from './styles'

export function Presentation() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  function handleOpenContactModal() {
    setIsContactModalOpen(true)
  }

  function handleCloseContactModal() {
    setIsContactModalOpen(false)
  }

  return (
    <Container>
      <div className="infos">
        <h1>Olá, eu sou o João Vitor Lima :)</h1>
        <p>Desenvolvedor Frontend Junior</p>
        <div className="buttons">
          <a
            href={
              'https://docs.google.com/document/d/e/2PACX-1vSBmA3RDj6JO0nYpODJ1-pjnKdWWqgLTxGGM8dEd-IcJagMDQoEL8YGdNrNGwXv9LTe72Qg8lnU4eR_/pub'
            }
            target="_blank"
            type="application/pdf"
            rel="noreferrer"
          >
            <button type="button">Download CV</button>
          </a>
          <button
            onClick={handleOpenContactModal}
            className="black_button"
            type="button"
          >
            Entrar em contato
          </button>
        </div>
      </div>
      <div className="image">
        <img src={imageSvg} alt="Imagem" />
      </div>
      <ContactModal
        isOpen={isContactModalOpen}
        onRequestClose={handleCloseContactModal}
      />
    </Container>
  )
}
