import styled from 'styled-components'

export const ReturnToHeaderContainer = styled.a`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 1rem;

  width: 3rem;
  height: 3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary);
  border-radius: 10000px;

  &:hover {
    opacity: 0.8;
    transition: 0.2s opacity;
  }
`
