import styled from 'styled-components';

export const Container = styled.body`
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`

`;

export const Title = styled.h1`
  color: #4F2F00;
`;

export const Input = styled.input`
  border: none;
  border-radius: 6px;
  margin: 0 0 2%;
  padding: 1%;
  width: 20%;
  :focus{
    outline: none;
  }

  background-color: #C2D8B1;

`;


export const AuthButton = styled.button`
  border: 2px solid #603900;
  border-radius: 4px;
  background: #EBD3B1;

  cursor: pointer;

  font-weight: 700;
  color: #603900;
`;

export const Paragraph = styled.p`
  font-family: 'roboto';

`;

export const LinkText = styled.text`
  font-weight: bold;
  color: green;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;