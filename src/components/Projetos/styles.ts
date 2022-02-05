import styled from "styled-components";

export const Titulo = styled.h2`
  text-align: center; 
  color: var(--white);
  font-size: 2rem;
  line-height: 2.625rem;
  padding-top: 8rem;
`

export const Container = styled.div`
  width: 90%;
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.75rem;

  .projeto {
    display: flex;
    flex-direction: column;
    padding: 1.25rem 1.5rem;
    width: 21.875rem;
    height: 15.625rem;
    border: 1px solid #333333;
    box-sizing: border-box;
    background: var(--gray-400);

    a {
      img {
        width: 18.75rem;
        height: 9.375rem;
      }
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
  }

  @media (max-width: 680px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`