import React from 'react';
import { Link } from 'react-router-dom';

import { Logo, Title, Input, AuthButton, Paragraph, LinkText, Container } from '../styles/authStyle';

const Cadastro = () => {
  return (
    <Container>
      <Logo
        src='/images/logo-rgcf.png'
        width='250'
        height='200'
      />

      <Title>Cadastro</Title>

      <Input
        placeholder='Email...'
        type="email"
      />

      <Input
        placeholder='Senha...'
        type="password"
      />

      <Link to={'Conta'}>CADASTRAR</Link>

      <Paragraph>
        Já possui uma conta?
        <Link to='/' style={{ textDecoration: 0 }}>
          <LinkText>Login</LinkText>
        </Link>
      </Paragraph>
    </Container>
  );
}

export default Cadastro;