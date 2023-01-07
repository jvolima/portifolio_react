import closeSvg from "../../../assets/close.svg";
import phoneSvg from "../../../assets/phone.svg";
import mailSvg from "../../../assets/mail.svg";
import linkedinSvg from "../../../assets/linkedin.svg"
import githubSvg from "../../../assets/github.svg"

import Modal from "react-modal";
import { Container } from "./styles";

interface ContactModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ContactModal({ isOpen, onRequestClose }: ContactModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeSvg} alt="Fechar modal" />
      </button> 

      <Container>
        <h2>Contatos</h2>
        <div>
          <img src={phoneSvg} alt="Telefone" />
          <span>(44) 99742-8611</span>
        </div>
        <div>
          <img src={mailSvg} alt="Email" />
          <span>jvolima2004@gmail.com</span>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-de-oliveira-lima-36b573215" target="_blank">
            <img src={linkedinSvg} alt="Linkedin" />
          </a>
          <span>João Vitor de Oliveira Lima</span>
        </div>
        <div>
          <a href="https://github.com/jvolima" target="_blank">
            <img src={githubSvg}  width="32" height="32" alt="Github" />
          </a>
          <span>jvolima</span>
        </div>
      </Container>
    </Modal>
  )
}