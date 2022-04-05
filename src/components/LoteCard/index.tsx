import React from 'react';
import { Link } from 'react-router-dom';

import { GridContainer, GridItem, InputBox, Label, TextContent } from './style'
import data from '../../data/api/data';

const LoteCard: React.FC = () => {
  return (
    <GridContainer>



      {data.map((item) => {
        return (
          <GridItem>
            <Link to={`/LoteDetails/${item.id}`} style={style}>
              <InputBox>
                <Label>Lote</Label>
                <TextContent>{item.lote}</TextContent>
              </InputBox>

              <InputBox>
                <Label>N° de Série</Label>
                <TextContent>{item.num_serie}</TextContent>
              </InputBox>

              <InputBox>
                <Label>Produtor</Label>
                <TextContent>{item.produtor}</TextContent>
              </InputBox>
            </Link>
          </GridItem>
        );
      })}





    </ GridContainer>
  );
}

const style = {
  textDecoration: 'none',
  color: '#000'
}

export default LoteCard