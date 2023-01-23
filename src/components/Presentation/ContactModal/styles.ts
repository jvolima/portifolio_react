import styled from 'styled-components'

export const Container = styled.div`
  h2 {
    color: var(--title);
    font-size: 2rem;
  }

  div {
    height: 5rem;
    border-radius: 0.25rem;
    padding: 0 1rem;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    background: var(--secondary);

    span {
      margin-left: 1rem;
      color: var(--text);
      font-size: 1.125rem;

      a {
        color: var(--text);
      }
    }
  }

  @media (max-width: 350px) {
    div {
      span {
        font-size: 1rem;
      }
    }
  }
`
