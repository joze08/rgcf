import React from 'react';

import { Container, Title, Input, InputBox, Label, Sec } from './style';
import { IInputCard } from '../../interfaces/components.interface';

const InputCard: React.FC<IInputCard> = ({ labels, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Sec>
        {labels.map((item) => {
          return (
            <InputBox>
              <Label>{item}</Label>
              <Input />
            </InputBox>
          );
        })}
      </Sec>
    </Container>
  );
}

export default InputCard;