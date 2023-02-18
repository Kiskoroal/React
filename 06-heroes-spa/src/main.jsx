import React from 'react';
import ReactDOM from 'react-dom/client';
import HeroesApp from './HeroesApp';
import './styles.css';
import 'animate.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>
)
