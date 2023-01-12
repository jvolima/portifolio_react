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
        Meu nome é João Vitor de Oliveira Lima, tenho 18 anos e estudo
        programação há mais de 4 anos. Atualmente estou focado em aprender cada
        vez mais sobre Node e React utilizando Typescript. Agora que terminei o
        ensino médio de técnico em informática pretendo fazer faculdade de
        Ciências da Computação e entrar no mercado de trabalho como dev.
      </p>
    </AboutContainer>
  )
}
