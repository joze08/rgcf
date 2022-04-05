import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 5%;
`;

export const Title = styled.h1`
  margin: 1% 0;

  font-size: 20px;
  color: #2F4B19;
`;

export const Sec = styled.div`
  display: flex;
  align-items: center;

  background: #EAF0EB;
  border-radius: 10px;
`;

export const Right = styled.div`
  
`;

export const Buttons = styled.div`
  color: #2F4B19;

  display: flex;
  align-items: center;

  font-size: 16px;
  margin: 3% 0 3% 0;
`;

export const AltImgBtn = styled.button`
  background: #C2D8B1;

  font-size: 16px;

  padding: 2%;
  margin: 0 5% 0 0;
  border: none;
  border-radius: 10px;

  :hover {
    cursor: pointer
  }

`;

export const TrashBtn = styled.button`
  border: none;

  :hover {
    cursor: pointer
  }
`;

export const TextContent = styled.p`
  padding: .8%;
  border-radius: 10px;

  font-size: 14px;
`;

export const Img = styled.img`
  margin: 0 6% 0 3%;
  border-radius: 70px;
`;