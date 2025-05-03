// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Catalogue from '../catalogue/Catalogue'; // путь к твоему компоненту
import {Home} from '../home/home'; // путь к главной странице

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
      </Routes>
    </Router>
  );
};

export default App;
