import styled from "styled-components";

export const Container = styled.header`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.75rem;
    line-height: 34px;
    color: var(--white);
    margin-top: 2rem;
  } 

  ul {
    list-style: none;
    display: flex;

    li {
      font-size: 18px;
      line-height: 23px;
      margin-right: 3rem;
      margin-top: 2rem;

      a {
        text-decoration: none;
        color: var(--white);
      }
    }
  }
`