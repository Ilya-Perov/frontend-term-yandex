import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import Catalogue from './components/catalogue/Catalogue';

const domNode = document.getElementById('root') as HTMLDivElement;  // Явно указали тип
const root = createRoot(domNode);

root.render(
  <StrictMode>
    <Catalogue />
  </StrictMode>
);
