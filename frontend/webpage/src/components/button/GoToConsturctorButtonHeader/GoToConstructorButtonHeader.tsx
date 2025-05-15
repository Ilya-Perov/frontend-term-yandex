import { useNavigate } from 'react-router-dom';
import './GoToConstructorButtonHeader.css';

export const GoToConstructorButtonHeader = () => {
  const navigate = useNavigate();

  const goToConstructor = () => {
      navigate('/recipeConstructor');
  };

  return (
    <div>
      <button 
          type="button"
          className="constructorButtonHeader"
          onClick={goToConstructor}>
          Конструктор<br />рецептов
      </button>
    </div>
  );
};
