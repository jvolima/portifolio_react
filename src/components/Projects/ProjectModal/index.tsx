import Modal from 'react-modal'
import { ProjectModalContainer } from './styles'
import { ProjectType } from '../Project'
import { X } from 'phosphor-react'

interface Props {
  project: ProjectType
  isOpen: boolean
  onRequestClose: () => void
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
        <X color="#A8A8B3" size={24} />
      </button>

      <ProjectModalContainer>
        <div className="titleAndImage">
          <h1>{project.title}</h1>
          <img src={project.image} alt="" />
        </div>
        <p>{project.description}</p>

        <h2>Tecnologias</h2>
        <p>{project.techs.join(', ')}</p>

        <h2>Links</h2>
        <div className="links">
          <a href={project.github} target="_blank" rel="noreferrer">
            Github
          </a>
          {project.deploy && (
            <a href={project.deploy} target="_blank" rel="noreferrer">
              Deploy
            </a>
          )}
        </div>
      </ProjectModalContainer>
    </Modal>
  )
}
