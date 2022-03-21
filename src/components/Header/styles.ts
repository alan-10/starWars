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
  //background-repeat: no-repeat;
  //background-size: 100%;
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
  margin-left: 13rem;
  gap: 30px;
  > link {
    height: 3rem;
    width: 11rem;
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
        background-color: ${darken(0.2,'#AD0707')};
      }
    }
  }

 

  @media(max-width: 600px){
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
  


`}
  }

  
  
`;


export const MenuBurger = styled.button`
   display: none;
 
  @media(max-width: 600px){
  
    display: block; 
  } 
`;


