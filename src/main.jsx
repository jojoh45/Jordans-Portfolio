import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router';
import { HashRouter } from 'react-router';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>,
)
