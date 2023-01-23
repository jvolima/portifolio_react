import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: ${(props) => props.theme.colors.primary};
    --secondary: ${(props) => props.theme.colors.secondary};
    --title: ${(props) => props.theme.colors.title};
    --border: ${(props) => props.theme.colors.border};
    --background: ${(props) => props.theme.colors.background};
    --text: ${(props) => props.theme.colors.text};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  body, input, textarea, button {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
  }

  [disabled] {
    cursor: not-allowed;
    opacity: 0.6
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px var(--primary);
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.8);

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 0 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 500px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;

    @media (max-width: 380px) {
      padding: 2rem;
    }

    @media (max-width: 330px) {
      padding: 1rem;
    }
  }

  .react-modal-content-bigger {
    width: 100%;
    max-width: 800px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;

    @media (max-width: 380px) {
      padding: 2rem;
    }

    @media (max-width: 330px) {
      padding: 1rem;
    }
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`
