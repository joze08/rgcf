import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Logo, Title, Input, AuthButton, Paragraph, LinkText, Container } from '../styles/authStyle';

const Login = () => {

  return (
    <Container>
      <Logo
        src='/images/logo-rgcf.png'
        width='250'
        height='250'
      />

      <Title>Login</Title>

      <Input
        placeholder='Email...'
        type="email"
      />

      <Input
        placeholder='Senha...'
        type="password"
      />

      <Link style={{
        border: '#603900',
        borderRadius: '4px',
        background: '#EBD3B1',
        cursor: 'pointer',
        fontWeight: 700,
        color: '#603900',
      }}
        to={'LotesCadastrados'}>LOGAR</Link>

      <Paragraph>
        Criar uma nova conta?
        <Link to='Cadastro' style={{ textDecoration: 0 }}>
          <LinkText>Cadastro</LinkText>
        </Link>
      </Paragraph>
    </Container>
  );
}

export default Login;