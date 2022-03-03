import { createGlobalStyle } from 'styled-components';
const Globalstyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;
  }
  a {
    text-decoration: none;
  }
`;

export default Globalstyle;