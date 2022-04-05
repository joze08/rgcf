import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Header, Button, ImgCard, InputCard } from '../components';

const AltLote = () => {

  const indentifyData = ["Lote", "N° de Série", "Produtor"];
  const productionData = ["Fertilizantes", "Calassagem", "Adubos", "Nutrição Mineral", "Poda"];

  const { id } = useParams();

  const navigate = useNavigate();

  function handleNavigation() {
    navigate(`/LoteDetails/${id}`)
  }

  return (
    <>
      <Header />
      <Button buttonAct={handleNavigation} position='Left'>CANCELAR</Button>
      <ImgCard title='Imagem do Grão' />
      <InputCard title='Dados de Identificação' labels={indentifyData} />
      <InputCard title='Dados de Produção' labels={productionData} />
      <Button buttonAct={() => { }} position='Right'>ALTERAR</Button>

    </>
  );
}

export default AltLote;