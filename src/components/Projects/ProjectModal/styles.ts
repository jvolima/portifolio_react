import styled from 'styled-components'

export const ProjectModalContainer = styled.div`
  .titleAndImage {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 1rem;

    h1 {
      font-size: 2.5rem;
      color: var(--title);
    }

    img {
      margin-top: 1rem;
      max-width: 32rem;
      width: 100%;
      height: auto;
    }
  }

  p {
    font-size: 1.25rem;
    color: var(--text);
  }

  h2 {
    margin-top: 1rem;
    font-size: 2rem;
    color: var(--title);
  }

  .links {
    display: flex;
    gap: 2rem;

    a {
      font-size: 1.25rem;
      color: var(--text);
    }
  }
`
