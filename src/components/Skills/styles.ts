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
  display: flex;
  align-items: center;
  justify-content: space-around;

  .skill {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border: 1px solid var(--gray-200);
    box-sizing: border-box;
    background: var(--gray-400);
  }
`