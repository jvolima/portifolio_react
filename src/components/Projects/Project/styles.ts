import styled from "styled-components";

export const ProjectContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 1.25rem 1.5rem;
  min-width: 21.875rem;
  min-height: 15.625rem;
  border: 1px solid #333333;
  box-sizing: border-box;
  background: var(--gray-400);

  &:hover {
    transition: border 0.2s;
    border: 1px solid var(--green-light);
  }

  img {
    width: 18.75rem;
    height: 9.375rem;
  }

  h3 {
    margin-top: 1rem;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.5rem;
    color: #fff;
  }

  p {
    margin-top: 0.2rem;
    font-size: 0.875rem;
    line-height: 1.125rem;  
    color: var(--gray);
  }
`