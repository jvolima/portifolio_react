import closeSvg from '../../../assets/close.svg'
import Modal from "react-modal";
import { ProjectModalContainer } from './styles';

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ProjectModal({ isOpen, onRequestClose }: Props) {
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

      <ProjectModalContainer>
        <h1>Hello</h1>
      </ProjectModalContainer>
    </Modal>
  )
}