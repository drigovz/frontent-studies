import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #79ab7f;
    --title-color: #79ab7f;
    --text-color: #034AAD;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 1rem "Roboto", sans-serif;
    background: #fff5e7;
    -webkit-font-smoothing: antialiased;
    color: var(--text-color);
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--title-color);
  }
`;
