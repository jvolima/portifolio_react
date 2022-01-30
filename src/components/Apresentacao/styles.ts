import styled from "styled-components";


export const Container = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  margin-top: 9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .infos {
    max-width: 340px;

    h1 {
      max-width: 270px;
      font-size: 2rem;
      line-height: 3rem;
      color: var(--white);
    }

    p {
      margin-top: 1.125rem;
      font-weight: 500;
      font-size: 1.125rem;
      line-height: 1.5rem;
      color: var(--gray);
    }

    button {
      margin-top: 2rem;
      border: 1px solid var(--gray-200);
      box-sizing: border-box;
      background: var(--green-light);
      color: (--dark);
      width: 143px;
      height: 42px;
      margin-right: 1rem;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;

      &:hover {
        background: var(--gray-200);
        color: var(--white);
        transition: 0.4s;
      }

      &:last-child {
        background: var(--dark);
        width: 157px;
        margin-right: 0;
        color: var(--white);

        &:hover {
          background: var(--white);
          color: var(--dark)
        }
      }
    }
  }

  .imagem {
    img {
      width: 300px;
      height: 255px;
    }
  }
`