//JavaScript File - Entry Point that  renders the complete React App in index.htnml file 'root' div.
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
