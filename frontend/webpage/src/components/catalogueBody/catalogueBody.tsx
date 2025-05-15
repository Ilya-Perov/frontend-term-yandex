import { useEffect, useState } from 'react';
import { RecipePreview } from '../recipePreview/recipePreview';
import { RecipeDisplay } from '../recipeDisplay/recipeDisplay';
import { Recipe } from '../../types';
import { fetchRecipes } from '../api/api';
import './catalogueBody.css';

const CatalogueBody = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const data = await fetchRecipes();
        setRecipes(data);
      } catch (error) {
        console.error('Ошибка загрузки рецептов:', error);
      }
    };

    loadRecipes();
  }, []);

  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseRecipe = () => {
    setSelectedRecipe(null);
  };

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      handleCloseRecipe();
    }
  };

  const handleEscPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleCloseRecipe();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscPress);
    return () => {
      window.removeEventListener('keydown', handleEscPress);
    };
  }, []);

  return (
    <div className="catalogueContainer">
      <div className="catalogueHeader">
        <h1 className="catalogueTitle">Каталог рецептов</h1>
        <p className="catalogueDescription">
          Здесь вы найдёте разнообразные рецепты на каждый день — от быстрых
          завтраков до изысканных ужинов. Выберите блюдо, нажмите на него,
          откройте рецепт и готовьте с удовольствием!
        </p>
      </div>

      <div className="catalogueGrid">
        {recipes.map((recipe) => (
          <div
            key={recipe.title}
            className="catalogueItem"
            onClick={() => handleRecipeClick(recipe)}
          >
            <RecipePreview
              title={recipe.title}
              description={recipe.description}
              image={recipe.image_url}
              tags={recipe.tags}
            />
          </div>
        ))}
      </div>

      {selectedRecipe && (
        <div className="modal" onClick={handleOverlayClick}>
          <div className="modalContent">
            <button onClick={handleCloseRecipe} className="closeButton">
              Закрыть
            </button>
            <RecipeDisplay
              title={selectedRecipe.title}
              description={selectedRecipe.description}
              image={selectedRecipe.image_url}
              tags={selectedRecipe.tags}
              ingredients={selectedRecipe.ingredients}
              cookingTime={selectedRecipe.cooking_time}
              servings={selectedRecipe.servings}
              instructions={selectedRecipe.instructions}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CatalogueBody;
