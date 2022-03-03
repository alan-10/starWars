import styled from 'styled-components';
import { darken } from 'polished';

//export const 

export const Heade = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1.5rem;
  height: 1.5rem;

 
  //background-repeat: no-repeat;
  background-size: 100%;
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

export const Menu = styled.li`
  display: flex;
  
  > li {
    margin-left: 10px;
   
    > a {
      display: block;
      padding: 10px;
      background-color: #AD0707;
      color: white;
      border-radius: 4px;
      width: 10rem;
      transition: backgound .2s;

      &:hover {
        background-color: ${darken(0.2,'#AD0707')};
      }
    }
  }


`;