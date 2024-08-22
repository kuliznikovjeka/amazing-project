import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App/App';
import './styles/index.scss';
import ThemeProvider from './theme/ThemeProvider';

const root = document.getElementById('root');
render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
root)