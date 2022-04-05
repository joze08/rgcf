import React from 'react';
import { Link } from 'react-router-dom';

import { IButtonCard } from '../../interfaces/components.interface';
import { Container, Label, Sec, TextContent, Title, Button } from './style';

const ButtonCard: React.FC<IButtonCard> = ({ buttonTxt, text, title, buttonAct }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Sec>
        <Button onClick={buttonAct}>
          <Label>{buttonTxt}</Label>
        </Button>

        <TextContent>{text}</TextContent>
      </Sec>
    </Container>
  );
}


export default ButtonCard;