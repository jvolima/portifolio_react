import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { ComputerTower, Desktop, DeviceMobile } from 'phosphor-react'

import { ServicesContainer, ServicesList, Title } from './styles'

export function Services() {
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
    <ServicesContainer
      id="services"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <Title>Serviços</Title>
      <ServicesList>
        <div className="service">
          <Desktop color="#00DF5E" size={60} />
          <h3>Sites</h3>
          <div className="line"></div>
        </div>
        <div className="service">
          <DeviceMobile color="#00DF5E" size={60} />
          <h3>Aplicativos</h3>
          <div className="line"></div>
        </div>
        <div className="service">
          <ComputerTower color="#00DF5E" size={60} />
          <h3>APIs</h3>
          <div className="line"></div>
        </div>
      </ServicesList>
    </ServicesContainer>
  )
}
