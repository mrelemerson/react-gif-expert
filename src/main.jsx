import React from 'react';
import ReactDOM from 'react-dom/client';

import './scss/styles.scss';
import { GifExpertApp } from './GifExpertApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
);
