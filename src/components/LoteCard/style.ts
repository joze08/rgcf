import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  row-gap: 15%;
  column-gap: 8%;
  

  margin: 5% 8%;
`;

export const GridItem = styled.div`
  background-color: #EAF0EB;
  border-radius: 10px;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  margin: 0 5% 0 5%;
`;

export const Label = styled.h1`
  font-size: 16px;
  margin: 0;
`;

export const TextContent = styled.p`
  background: #C2D8B1;
  
  padding: .8%;
  border-radius: 2px;

  width: 70%;
`;

