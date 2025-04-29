import './app.css'
import '../../vendor/normalize.css'
import '../../fonts/font.css'
import React from 'react';
import {WebpageTitle} from '../header/index'


const App = () => {
  
  return (
    <div style={{backgroundColor: '#FFAAEE', minHeight: '100vh'}}>
      <WebpageTitle/>
    </div>
  );
};

export default App;

