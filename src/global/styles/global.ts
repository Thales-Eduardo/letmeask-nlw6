import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary80};
    -webkit-font-smoothisng: antialiased;
  }

  body, input, button, textarea {
    font: 400 16px "Roboto", sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong, span{
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }
`;
