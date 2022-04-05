import React from 'react';

import { Container, AltImgBtn, Sec, TextContent, Title, Img, Buttons, Right, TrashBtn } from './style';
import { IImgCard } from '../../interfaces/components.interface';

const ImgCard: React.FC<IImgCard> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Sec>
        <Img
          src='/images/blank.png'
          width={85}
          height={85}
        />
        <Right>
          <Buttons>
            <AltImgBtn>Alterar a imagem</AltImgBtn>
            <TrashBtn onClick={() => { console.log("Clicou!!!") }}>
              <img src="/images/delete.png" alt="" width={25} height={25} />
            </TrashBtn>
          </Buttons>
          <TextContent>A imagem deve estar no formato JPEG ou PNG</TextContent>
        </Right>

      </Sec>
    </Container>
  );
}

export default ImgCard;