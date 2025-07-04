import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // important for Tailwind if used

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
