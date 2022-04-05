import React from 'react';

import { ButtonStl, TextBtn, ContainerLeft, ContainerRight } from './style';
import { IButton } from '../../interfaces/components.interface';

const Button: React.FC<IButton> = ({ children, position, buttonAct }) => {
  if (position === 'Right') {
    return (
      <ContainerRight>
        <ButtonStl onClick={buttonAct}>
          <TextBtn>{children}</TextBtn>
        </ButtonStl>
      </ContainerRight>
    );
  } else {
    return (
      <ContainerLeft>
        <ButtonStl onClick={buttonAct}>
          <TextBtn>{children}</TextBtn>
        </ButtonStl>
      </ContainerLeft>
    );
  }
}

export default Button;