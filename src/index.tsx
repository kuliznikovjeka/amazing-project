import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'App';
import { ThemeProvider } from 'App/providers/ThemeProvider';

import './App/styles/index.scss';

const root = document.getElementById('root');
render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
root)