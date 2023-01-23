import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: var(--primary);
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
        color: var(--title);
        transition-duration: 0.5s;
        font-size: 2rem;
        line-height: 4rem;
        padding: 0.2em 0;
        display: block;
        position: relative;
      }

      a::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.1em;
        background: var(--title);
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
`
