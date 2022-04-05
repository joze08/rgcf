import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, InputBox, Label, Sec, TextContent, Title } from '../styles/InfoCardStyle';
import userData from '../data/api/account';
import { Header, Button, InfoCard, ButtonCard, ImgCard } from '../components'

const Conta = () => {

  const navigate = useNavigate();

  function handleNavigation() {
    navigate('/AltConta');
  }

  return (
    <>
      <Header />
      <ImgCard title="Imagem do perfil" />

      <Container>
        <Title>Dados da Conta</Title>
        <Sec>
          <InputBox>
            <Label>Usuário</Label>
            <TextContent>{userData.name}</TextContent>
          </InputBox>

          <InputBox>
            <Label>Email</Label>
            <TextContent>{userData.email}</TextContent>
          </InputBox>

        </Sec>
      </Container>

      <ButtonCard
        title='Alterar dados da conta'
        buttonTxt='ALTERAR'
        buttonAct={handleNavigation}
        text='Aqui você altera os dados'
      />
      <ButtonCard
        title='Excluir conta'
        buttonTxt='EXCLUIR'
        buttonAct={() => { }}
        text='Aqui você exclui sua conta para sempre'
      />
      <Button position='Left' buttonAct={() => { }}>SAIR DA CONTA</Button>
    </>
  );
}

export default Conta;