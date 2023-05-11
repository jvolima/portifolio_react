import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { AboutContainer } from './styles'

export function About() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const containerVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: -200 },
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <AboutContainer
      id="about"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <h2>Sobre mim</h2>
      <p>
        Meu nome é João Vitor de Oliveira Lima, e tenho 18 anos. Estudo programação desde 2019, ano em
        que ingressei no curso de técnico em informática integrado ao ensino médio no IFPR. Concluí esse
        curso em 2022 e atualmente estou cursando Bacharelado em Ciência da Computação na UFSCar (turma 023).
        Meu objetivo na programação é continuar aprendendo e me aprimorando nas tecnologias mais recentes para
        me tornar um desenvolvedor de software de destaque no mercado.
      </p>
    </AboutContainer>
  )
}
