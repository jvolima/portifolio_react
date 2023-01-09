import closeSvg from '../../../assets/close.svg'
import Modal from "react-modal";
import { ProjectModalContainer } from './styles';
import { Project } from '../Project';

interface Props {
  project: Project
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ProjectModal({ project, isOpen, onRequestClose }: Props) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content-bigger"
      appElement={document.getElementById('root') as HTMLElement}
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeSvg} alt="Fechar modal" />
      </button> 

      <ProjectModalContainer>
        <div className="titleAndImage">
          <h1>{project.title}</h1>
          <img src={project.image} />
        </div>
        <p>{project.description}</p>

        <h2>Tecnologias</h2>
        <p>{project.techs.join(', ')}</p>

        <h2>Links</h2>
        <div className="links">
          <a href={project.github} target="_blank">Github</a>
          {project.deploy && <a href={project.deploy} target="_blank">Deploy</a>}
        </div>
      </ProjectModalContainer>
    </Modal>
  )
}