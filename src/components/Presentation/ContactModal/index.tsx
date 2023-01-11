import githubSvg from '../../../assets/github.svg'

import Modal from 'react-modal'
import { Container } from './styles'
import { EnvelopeSimple, LinkedinLogo, Phone, X } from 'phosphor-react'

interface ContactModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function ContactModal({ isOpen, onRequestClose }: ContactModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      appElement={document.getElementById('root') as HTMLElement}
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <X color="#A8A8B3" size={24} />
      </button>

      <Container>
        <h2>Contatos</h2>
        <div>
          <Phone color="#00DF5E" size={32} />
          <span>(44) 99742-8611</span>
        </div>
        <div>
          <EnvelopeSimple color="#00DF5E" size={32} />
          <span>jvolima2004@gmail.com</span>
        </div>
        <div>
          <LinkedinLogo color="#00DF5E" size={32} />
          <span>
            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-vitor-de-oliveira-lima-36b573215"
              target="_blank"
              rel="noreferrer"
            >
              João Vitor de Oliveira Lima
            </a>
          </span>
        </div>
        <div>
          <img src={githubSvg} width="32" height="32" alt="Github" />
          <span>
            <a
              href="https://github.com/jvolima"
              target="_blank"
              rel="noreferrer"
            >
              jvolima
            </a>
          </span>
        </div>
      </Container>
    </Modal>
  )
}
