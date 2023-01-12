import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ProjectsContainer = styled(motion.div)`
  padding-top: 6rem;
`

export const Title = styled.h2`
  text-align: center;
  color: var(--white);
  font-size: 2rem;
  line-height: 2.625rem;
`

export const ProjectsList = styled.div`
  width: 90%;
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.75rem;

  @media (max-width: 680px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`
