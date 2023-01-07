import { ProjectContainer } from "./styles";

interface Props {
  image: string
  title: string
  description: string
}

export function Project({ image, title, description }: Props) {
  function handleOpenModal() {
      
  }

  return (
    <ProjectContainer onClick={handleOpenModal}>
      <img src={image} alt="Luna bus" />
      <h3>{title}</h3>
      <p>{description}</p>
    </ProjectContainer>
  )
}