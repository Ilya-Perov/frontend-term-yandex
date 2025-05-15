import './HeaderCatalogueButton.css';
import { useNavigate } from 'react-router-dom';

export const HeaderCatalogueButton = () => {
  const navigate = useNavigate();

  const goToCatalogue = () => {
    navigate('/catalogue');
  };

  return (
    <button type="button" className="catalogueButton" onClick={goToCatalogue}>
      Каталог
      <br />
      рецептов
    </button>
  );
};
