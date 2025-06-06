// src/main.jsx
import React from 'react';
// —> IMPORT CORRECTO:
import { createRoot } from 'react-dom/client';

import App from './App';
import { AuthProvider } from './utils/AuthContext';
import './styles/global.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
