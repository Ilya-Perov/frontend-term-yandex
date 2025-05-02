import '../../vendor/normalize.css';
import '../../fonts/font.css';
import './App.css';
import React from 'react';
import {Header} from '../header/index';
import { RecipePreview } from '../recipePreview/recipePreview';


const App = () => {
  
  return (
    <div className='main'>
      <Header/>
      <RecipePreview tags={['Tasty', 'Good', 'Test', 'Fun', 'Likable']} name={'NameName'} description={'Description'}/>
    </div>
  );
};

export default App;

