import { createGlobalStyle } from 'styled-components';
const Globalstyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;

        /* ::-webkit-scrollbar {
          width: 15px;               /* width of the entire scrollbar 
        }  */
            
        /* ::-webkit-scrollbar-track {
          background: '';        /* color of the tracking area 
       }

    /* ::-webkit-scrollbar-thumb {
      background-color: #ababab;    /* color of the scroll thumb 
      border-radius: 20px;       /* roundness of the scroll thumb 
      border: 3px solid #ad0000;  /* creates padding around scroll thumb 
} */ 
    
  }
  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;

export default Globalstyle;