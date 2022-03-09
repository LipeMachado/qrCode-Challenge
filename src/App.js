import React from 'react';
import { GlobalStyle } from './globalStyled.js';

import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Routes />
    </Router>
  );
}

export default App;
