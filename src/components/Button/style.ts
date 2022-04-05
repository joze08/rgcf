import styled from 'styled-components';

export const ContainerLeft = styled.div`
  display: flex;
  justify-content: flex-start;

  margin: 0 5%;
  
`;

export const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;

  margin: 0 5%;
  
`;

export const ButtonStl = styled.button`
  background: #FFF;

  padding: 0 2%;
  margin: 2% 0;
  border: 3px solid #C2D8B1;
  border-radius: 10px;

  :hover {
    background: #C2D8B1;
    cursor: pointer;
  }
`;

export const TextBtn = styled.p`
  font-weight: bolder;
  color: #2F4B19;
  margin: 8% 0;
`;