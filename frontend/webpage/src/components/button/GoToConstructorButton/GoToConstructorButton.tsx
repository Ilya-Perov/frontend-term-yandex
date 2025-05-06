import { useNavigate } from 'react-router-dom';
import './GoToConstructorButton.css';

export const GoToConstructorButton = () => {
  const navigate = useNavigate();

  const goToConstructor = () => {
      navigate('/recipeConstructor');
  };

  return (
    <div className="buttonContainer">
      <button 
          type="button"
          className="constructorButton"
          onClick={goToConstructor}>
          Конструктор<br />рецептов
      </button>
    </div>
  );
};
