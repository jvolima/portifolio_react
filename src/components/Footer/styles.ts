import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--secondary);
  margin-top: 11.5rem;

  h3 {
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.3rem;
    color: var(--title);

    span {
      color: var(--primary);
    }
  }
`
