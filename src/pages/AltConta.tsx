import React from 'react';
import { useNavigate } from 'react-router-dom';

import InputCard from '../components/InputCard';
import Header from '../components/Header';
import Button from '../components/Button';

const AltConta = () => {

  const accountData = ["Usuário", "Email", "Senha", "Confirmar Senha"];

  const navigate = useNavigate();

  function handleNavigation() {
    navigate('/Conta');
  }

  return (
    <>
      <Header />
      <Button position='Left' buttonAct={handleNavigation}>CANCELAR</Button>
      <InputCard title='Dados da Conta' labels={accountData} />
      <Button position='Right' buttonAct={() => { }}>ALTERAR</Button>
    </>
  );
}

export default AltConta;