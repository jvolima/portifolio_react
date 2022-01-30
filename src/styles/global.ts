import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #f9f9f9;
    --gray-200: #333333;
    --dark: #171717;
    --gray: #828282;
    --gray-400: #212121;
    --green-light: #00DF5E;
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
    background: var(--dark);
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
`