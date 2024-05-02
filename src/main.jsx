import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from './hooks/auth';

import { Routes } from './routes';

import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </ThemeProvider>
)
