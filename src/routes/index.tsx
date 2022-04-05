import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Cadastro, AltConta, AltLote, CadastraLote, Conta, Login, LoteDetails, LotesCadastrados } from '../pages';

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Cadastro" element={<Cadastro />} />
      <Route path="/Conta" element={<Conta />} />
      <Route path="/AltConta" element={<AltConta />} />
      <Route path="/CadastraLote" element={<CadastraLote />} />
      <Route path="/LotesCadastrados" element={<LotesCadastrados />} />
      <Route path="/LoteDetails/:id" element={<LoteDetails />} />
      <Route path="/AltLote/:id" element={<AltLote />} />
    </Routes>
  );
}

export default Rotas;