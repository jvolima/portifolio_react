import { ProjectsContainer, Title } from './styles'
import { Project } from './Project'
import {
  designSystem,
  devLandia,
  igniteShop,
  jvBox,
  lunaBus,
  rocketHelp,
} from './projects'

export function Projects() {
  return (
    <>
      <Title id="projects">Projetos</Title>
      <ProjectsContainer>
        <Project project={devLandia} />
        <Project project={lunaBus} />
        <Project project={designSystem} />
        <Project project={igniteShop} />
        <Project project={rocketHelp} />
        <Project project={jvBox} />
      </ProjectsContainer>
    </>
  )
}
