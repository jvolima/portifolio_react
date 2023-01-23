import { motion } from 'framer-motion'
import styled from 'styled-components'

export const AboutContainer = styled(motion.div)`
  width: 90%;
  max-width: 1120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  h2 {
    margin-top: 6rem;
    color: var(--title);
    font-size: 2rem;
    line-height: 2.625rem;
    text-align: center;
  }

  p {
    max-width: 745px;
    margin-top: 2rem;
    font-size: 1.125rem;
    line-height: 2rem;
    color: var(--text);
    text-align: center;
  }
`
