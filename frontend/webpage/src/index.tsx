import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './components/app/App';

const domNode = document.getElementById('root') as HTMLDivElement;  // Явно указали тип
const root = createRoot(domNode);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
