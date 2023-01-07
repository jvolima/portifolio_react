import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 90%;
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

    a {
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
        font-size: 0.875rem;
        line-height: 1.125rem;

        &:hover {
          filter: brightness(0.8);
          transition: 0.2s;
        }
      }
    }

    .black_button {
      margin-top: 2rem;
      border: 1px solid var(--gray-200);
      box-sizing: border-box;
      background: var(--dark);
      width: 157px;
      margin-right: 0;
      color: var(--white);
      height: 42px;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 1.125rem;

      &:hover {
        filter: brightness(0.8);
        transition: 0.2s;
      }
    }
  }
  .image {
    img {
      width: 300px;
      height: 255px;
    }
  }

  @media (max-width: 630px) {
    flex-direction: column;
    text-align: center;

    .image {
      order: -1
    }
  } 

  @media (max-width: 370px) {
    .buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      a {
        button {
          margin-right: 0;
        }
      }
    }
  }
`