import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Header, Button, ImgCard, InputCard } from '../components';

const CadastraLote = () => {

  const indentifyData = ["Lote", "N° de Série", "Produtor"];
  const productionData = ["Fertilizantes", "Calassagem", "Adubos", "Nutrição Mineral", "Poda"];

  const navigate = useNavigate();

  function handleNavigation() {
    navigate('/LotesCadastrados');
  }

  return (
    <>
      <Header />
      <Button position='Left' buttonAct={handleNavigation}>CANCELAR</Button>
      <ImgCard title="Imagem do grão" />
      <InputCard title='Dados de Identificação' labels={indentifyData} />
      <InputCard title='Dados de Produção' labels={productionData} />
      <Button position='Right' buttonAct={() => { }}>CADASTRAR</Button>
    </>
  );
}

export default CadastraLote;