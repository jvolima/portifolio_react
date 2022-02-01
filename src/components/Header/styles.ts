import styled from "styled-components";

export const Container = styled.header`
  width: 90%;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.75rem;
    line-height: 2.125rem;
    color: var(--white);
    margin-top: 2rem;
  } 

  nav {
    ul {
      list-style: none;
      display: flex;

      li {
        font-size: 1.125rem;
        line-height: 1.4375rem;
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
  }

  @media (max-width: 670px) {
    nav {
      display: none;
    }

    .one, .two, .three, .four {
      background: var(--white);
      height: 5px;
      width: 100%;
      margin: 6px auto;

      transition-duration: 0.3s;
    }

    .menu-toggle {
      z-index: 10000;
      width: 40px;
      height: 30px;
      margin-right: 20px;
      margin-top: 20px;
      position: absolute;
      right: 12px;
      top: 2px;
    }

    .menu-section.on {
      .menu-toggle {   
          .one {
            transform: rotate(45deg) translate(7px, 7px);
          }

          .two {
            opacity: 0;
          }

          .three {
            transform: rotate(-45deg) translate(8px, -9px);
          }

          .four {
            opacity: 0;
          }
      }
    }
  } 
`