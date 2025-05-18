import { createGlobalStyle } from 'styled-components';

//Estilo general body screen
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Sora', sans-serif;
    background-color: #121212;
    color: #fff;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
