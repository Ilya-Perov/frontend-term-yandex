import { useNavigate } from 'react-router-dom';
import './body.css'

export const Body = () => {
  const navigate = useNavigate();

  const goToConstructor = () => {
      navigate('/recipeConstructor');
  };
  return (
    <div className='body'>
      <button 
          type='button'
          className='catalogueButton'
          onClick={goToConstructor}>
          Конструктор<br />рецептов
      </button>
    </div>
  );
};
