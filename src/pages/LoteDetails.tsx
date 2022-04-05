import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Container, InputBox, Label, Sec, TextContent, Title } from '../styles/InfoCardStyle';
import data from '../data/api/data';
import { Header, ButtonCard } from '../components';

const LoteDetails = () => {

  const params = useParams();
  const id = parseInt(params.id as string); //meio gambiarra, pode melhorar!

  const navigate = useNavigate();

  function handleNavigation() {
    navigate(`/AltLote/${id}`);
  }

  const lote = data.find((item) => item.id === id);

  return (
    <>
      <Header />

      <Container>
        <Title>Dados de Identificação</Title>
        <Sec>
          <InputBox>
            <Label>Lote</Label>
            <TextContent>{lote?.lote}</TextContent>
          </InputBox>

          <InputBox>
            <Label>Número de Série</Label>
            <TextContent>{lote?.num_serie}</TextContent>
          </InputBox>

          <InputBox>
            <Label>Produtor</Label>
            <TextContent>{lote?.produtor}</TextContent>
          </InputBox>

        </Sec>
      </Container>

      <Container>
        <Title>Dados da Produção</Title>
        <Sec>
          <InputBox>
            <Label>Fertilizantes</Label>
            <TextContent>{lote?.fertilizantes}</TextContent>
          </InputBox>

          <InputBox>
            <Label>Calagem e Gessalagem</Label>
            <TextContent>{lote?.calagem_gessalagem}</TextContent>
          </InputBox>

          <InputBox>
            <Label>Adubos</Label>
            <TextContent>{lote?.adubos}</TextContent>
          </InputBox>

          <InputBox>
            <Label>Nutrição Mineral</Label>
            <TextContent>{lote?.nutricao_mineral}</TextContent>
          </InputBox>

          <InputBox>
            <Label>Poda</Label>
            <TextContent>{lote?.poda}</TextContent>
          </InputBox>

        </Sec>
      </Container>

      <ButtonCard
        title='Reanalisar dados do lote'
        buttonTxt='REANALIZAR'
        text='Os dados e os grãos de seu lote serão encaminhados para uma nova análise.'
        buttonAct={() => { }}
      />

      <ButtonCard
        title='Alterar dados do lote'
        buttonTxt='ALTERAR'
        text='Podem ser alterados os dados de identificação e de produção.'
        buttonAct={handleNavigation}
      />

      <ButtonCard
        title='Excluir lote'
        buttonTxt='EXCLUIR'
        text='Ao excluir este lote não terá mais acesso a nenhum dado presente nele.'
        buttonAct={() => { }}
      />

    </>
  );
}

export default LoteDetails;