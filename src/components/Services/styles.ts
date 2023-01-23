import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ServicesContainer = styled(motion.div)`
  padding-top: 6rem;
`

export const Title = styled.h2`
  font-size: 2rem;
  line-height: 2.625rem;
  text-align: center;
  color: var(--title);
`

export const ServicesList = styled.div`
  position: relative;
  width: 90%;
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 0 0.4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 2.75rem;

  .service {
    min-width: 21.875rem;
    min-height: 15rem;
    background: var(--secondary);
    padding: 1.25rem 1.5rem;

    h3 {
      margin-top: 3.375rem;
      font-weight: 500;
      font-size: 2rem;
      line-height: 2.625rem;
      color: var(--text);
    }
  }

  .line {
    position: absolute;
    bottom: 0;
    margin-top: 0.9rem;
    margin-left: -1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--primary);
    width: 21.875rem;
    height: 5px;
  }

  @media (max-width: 752px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`
