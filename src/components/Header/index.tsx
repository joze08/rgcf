import React from "react";
import { Link } from 'react-router-dom';

import { Logo, Container, Ul, Li, LinkText, Img } from './style';

const Header: React.FC = () => {
  return (
    <Container>

      <Logo
        src='/images/logo-rgcf.png'
        width='65'
        height='65'
      />

      <Ul>
        <Li>
          <Link to={'/CadastraLote'} style={style}>
            <LinkText>Cadastrar Lotes</LinkText>
          </Link>
        </Li>
        <Li>
          <Link to={'/LotesCadastrados'} style={style} >
            <LinkText>Lotes Cadastrados</LinkText>
          </Link>
        </Li>
        <Li style={{ padding: 0, margin: 0 }}>
          <Link to={'/Conta'} >
            <Img src="/images/perfil.png" width={50} height={50} />
          </Link>
        </Li>
      </Ul>


    </Container>
  );
}

const style = {
  textDecoration: 'none',
  fontStyle: 'roboto',
  fontWeight: 'bold',
  color: '#603900',
  fontSize: '20px',
}

export default Header;