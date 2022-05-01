import styled, { css } from 'styled-components';
import { darken } from 'polished';


interface SyleProps {
  select: boolean | null;
}

export const Heade = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  height: 70px;
  box-sizing: border-box;
  overflow: hidden;
  background-color:#000;
  
  > div {
    color: white;
  }

  > a {
    color: white;
  }


`;



export const GroupButtons = styled.div`
  display: flex;
  margin-left: 2rem;
  gap: 30px;
  > link {
    height: 3rem;
    width: 10rem;
    border-radius: 8px;
    border-color: red;
    transition: background-color  1.5s;
    &:hover {
      background-color: red;
      color: white;
    }

  }

`;

export const Menu = styled.li<SyleProps>`

  display: flex;
  
  > li {
    margin-left: 10px;
   
    > a {
      display: block;
      padding: 10px;
      background-color: #AD0707;
      color: white;
      border-radius: 4px;
      width: 9rem;
      transition: backgound .2s;

      &:hover {
        background-color: ${darken(0.2, '#AD0707')};
      }
    }
  }

  @media(max-width: 900px){
    > li {

      >a {
          font-size: 1rem;
          width: 6rem;
      }

     > link {
      background-color: blue;
    }
    }
   
  }
 

  @media(max-width: 650px){
    display: block; 
    position: absolute;
    width: 100%;
    top: 70px;
    right: 0px;
    background-color: #000;
    height: 0px;
    z-index: 10000;
    overflow: hidden;
    background-color: none;
    
    transition:  .8s;
    
    > li {
     
      > a{
        width: 100%;
        background-color: #000;
        padding: 1rem 0;
        margin: 0 1rem;
        border-bottom: 2px solid #AD0707;
      }
    }


    ${(props: SyleProps) => props.select === true && css`

    /* display: block; */
    height: calc(100% - 70px);
    overflow: hidden;
    height: 200% ;

`}
  }

  
  
`;


export const MenuBurger = styled.button<SyleProps>`
   display: none;
   border: none;
   padding: .5rem 1rem;
   background-color: transparent;
   color: #AD0707;
   font-size: 1.1rem;
   > span {
      width: 20px;
      border-top: solid 2px red;
      transition:.2s;
      display: block;

      &:after, ::before {
        content: '';
        display: block;
        width: 20px;
        height: 2px;
        background: currentColor;
        margin-top: 5px;
        
      }


        ${(props: SyleProps) => props.select === true && css`
        
            border-top-color: transparent;

            &::before {
              transform: rotate(135deg);
            }
             
             &::after {
              position: absolute;
              transform: rotate(-135deg);
              top: 27px;
            }
              
          
        `}

   }
 
  @media(max-width: 650px){
    display: flex; 
    gap: .5rem;

  } 


`;


