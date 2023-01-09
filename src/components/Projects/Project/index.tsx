import { useState } from "react";
import { ProjectModal } from "../ProjectModal";
import { ProjectContainer } from "./styles";

export type Project = {
  title: string;
  description: string;
  techs: string[];
  image: string;
  github: string;
  deploy?: string;
}

interface Props {
  project: Project
}

export function Project({ project }: Props) {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)

  function handleOpenProjectModal() {
    setIsProjectModalOpen(true)
  }

  function handleCloseProjectModal() {
    setIsProjectModalOpen(false)
  }

  return (
    <>
      <ProjectContainer onClick={handleOpenProjectModal}>
        <img src={project.image} />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </ProjectContainer>
      <ProjectModal isOpen={isProjectModalOpen} onRequestClose={handleCloseProjectModal} project={project} />
    </>
  )
}