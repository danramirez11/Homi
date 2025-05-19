import { createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Archivo', sans-serif;
    background-color: #ffff; 
    color: rgba(75, 75, 75, 1);
  }
`;
