import styled from "styled-components";

export const Titulo = styled.h2`
  text-align: center; 
  color: var(--white);
  font-size: 2rem;
  line-height: 2.625rem;
  margin-top: 8rem;
`

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.75rem;

  .projeto {
    display: flex;
    flex-direction: column;
    padding: 1.25rem 1.5rem;
    width: 350px;
    height: 240px;
    border: 1px solid #333333;
    box-sizing: border-box;
    background: var(--gray-400);

    h3 {
      font-weight: 500;
      font-size: 1.125rem;
      line-height: 1.5rem;
      color: #fff;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.125rem;  
      color: var(--gray);
    }
  }
`