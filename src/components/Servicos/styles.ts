import styled from "styled-components";

export const Titulo = styled.h2`
  margin-top: 8rem;
  font-size: 2rem;
  line-height: 2.625rem;
  text-align: center;
  color: var(--white);
`

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.75rem;

  .servico {
    width: 350px;
    height: 240px;
    background: var(--gray-400);
    padding: 1.25rem 1.5rem;

    h3 {
      margin-top: 3.375rem;
      width: 126px;
      height: 84px;
      font-weight: 500;
      font-size: 2rem;
      line-height: 2.625rem;
      color: var(--gray);
    }
  }

  .linha {
    margin-top: 0.9rem;
    margin-left: -1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--green-light);
    width: 350px;
    height: 5px
  }
`
