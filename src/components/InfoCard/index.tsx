import React from 'react';

import { IInfoCard } from '../../interfaces/components.interface';
import { Container, Title, TextContent, InputBox, Label, Sec } from './style';


const InfoCard: React.FC<IInfoCard> = ({ title }) => {

  return (
    <Container>
      <Title>{title}</Title>
      <Sec>
        <InputBox>
          <Label></Label>
          <TextContent></TextContent>
        </InputBox>

      </Sec>
    </Container>
  );
}

export default InfoCard;