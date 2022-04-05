import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 2% 5% 1%;
`;

export const Title = styled.h1`
  margin: 1% 0;
  font-size: 20px;
  color: #2F4B19;
`;

export const Sec = styled.div`
  background: #EAF0EB;
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

export const Input = styled.input`
  background: #C2D8B1;

  font-size: 16px;
  
  padding: .5%;
  margin: 1.5% 0;
  border-radius: 10px;
  border: none;

  width: 80%;



  :focus {
    border: none;
  }
`;