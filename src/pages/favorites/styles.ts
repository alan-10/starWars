import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 1200px;
  justify-content: center;
  padding: 10px;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;





export const Content = styled.div`
display: flex;

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    width: 800px;
  }
`;
