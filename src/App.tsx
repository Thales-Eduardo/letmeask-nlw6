import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { AuthProvider } from './hooks/Auth';
import { useTheme } from './hooks/Theme';

import light from './global/styles/themes/light';
import dark from './global/styles/themes/dark';
import GlobalStyle from './global/styles/global';

import { SwitchTheme } from './components/SwitchTheme';

import { Router } from './routes';

const App: React.FC = () => {
  const [theme, setTheme] = useTheme<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <SwitchTheme toggleTheme={toggleTheme} />
          <Router />
        </AuthProvider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
