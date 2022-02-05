import closeSvg from "../../assets/close.svg";
import phoneSvg from "../../assets/phone.svg";
import mailSvg from "../../assets/mail.svg";
import linkedinSvg from "../../assets/linkedin.svg"

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
          <img src={linkedinSvg} alt="Linkedin" />
          <span>João Vitor de Oliveira Lima</span>
        </div>
      </Container>
    </Modal>
  )
}