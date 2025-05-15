import './HeaderSearchButton.css';
import { useNavigate } from 'react-router';

type headerSearchButtonProps = {};

export const HeaderSearchButton = () => {
  const navigate = useNavigate();

  const goToSearch = () => {
    navigate('/search');
  };
  return (
    <button type="button" className="searchButton" onClick={goToSearch}>
      Поиск
      <br />
      рецептов
    </button>
  );
};
