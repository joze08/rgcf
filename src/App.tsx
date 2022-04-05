import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Rotas from './routes';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Rotas />
      </Router>
    </>
  );
}

export default App;
