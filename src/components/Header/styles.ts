import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 90%;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.75rem;
    line-height: 2.125rem;
    color: var(--title);
    margin-top: 2rem;
  }

  .menu-section {
    margin-top: 2rem;
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: 0;

      svg {
        color: var(--primary);
      }

      &:focus {
        box-shadow: 0 0px;
      }
    }
  }

  nav {
    ul {
      list-style: none;
      display: flex;

      li {
        font-size: 1.125rem;
        line-height: 1.4375rem;
        margin-right: 3rem;

        a {
          text-decoration: none;
          color: var(--title);
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
          background: var(--primary);
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
        a:focus::after {
          transform: scale(1);
        }
      }
    }
  }

  @media (max-width: 700px) {
    nav {
      display: none;
    }

    .one,
    .two,
    .three,
    .four {
      background: var(--title);
      height: 5px;
      width: 100%;
      margin: 6px auto;

      transition-duration: 0.3s;
    }

    .one {
      margin-top: 0;
    }

    .menu-toggle {
      margin-left: 1.5rem;
      z-index: 10000;
      width: 40px;
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
