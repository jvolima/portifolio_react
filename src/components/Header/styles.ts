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
        display: block;
        position: relative;
        padding: 0.2em 0;
      }

      a::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.1em;
        background: var(--green-light);
        opacity: 0;
        transition: opacity 300ms, transform 300ms;
      }

      a:hover::after,
      a:focus::after {
        opacity: 1;
        transform: translate3d(0, 0.2em, 0);
      }

      a::after {
        opacity: 1;
        transform: scale(0);
        transform-origin: center;
      }

      a:hover::after,
      a:focus::after{
        transform: scale(1);
      }
    }
  }
`