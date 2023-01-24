import styled from 'styled-components'

export const ProjectContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 1.25rem 1.5rem;
  max-width: 20rem;
  border: 1px solid var(--border);
  box-sizing: border-box;
  background: var(--secondary);

  &:hover {
    transition: border 0.2s;
    border: 1px solid var(--primary);
  }

  img {
    max-width: 18.5rem;
    width: 100%;
    object-fit: cover;
  }

  h3 {
    margin-top: 1rem;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.5rem;
    color: var(--title);
  }

  p {
    margin-top: 0.2rem;
    font-size: 0.875rem;
    line-height: 1.125rem;
    color: var(--text);
  }
`
