import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: var(--green-light);
  width: 100vw;
  height: 100vh;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    text-align: center;
    display: block;
    list-style: none;

    li {
      a {
        text-decoration: none;
        color: var(--white);
        transition-duration: 0.5s;
        font-size: 2rem;
        line-height: 4rem;
      }
    }
  }
`