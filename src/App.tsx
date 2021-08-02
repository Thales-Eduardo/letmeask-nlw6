import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './hooks/Auth';

import { Router } from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
