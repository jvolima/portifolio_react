import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { ProjectsContainer, ProjectsList, Title } from './styles'
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
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const containerVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: -100 },
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <ProjectsContainer
      id="projects"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <Title>Projetos</Title>
      <ProjectsList>
        <Project project={devLandia} />
        <Project project={lunaBus} />
        <Project project={designSystem} />
        <Project project={igniteShop} />
        <Project project={rocketHelp} />
        <Project project={jvBox} />
      </ProjectsList>
    </ProjectsContainer>
  )
}
