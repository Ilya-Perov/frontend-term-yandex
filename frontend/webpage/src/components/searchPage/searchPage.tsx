import './searchPage.css';
import { useEffect, useState } from 'react';
import { fetchRecipes } from '../api/api';
import { Recipe } from '../../types';
import { extractAllTags } from '../../utils/extractAllTags';
import TagDropdown from '../tagDropdown/tagDrodown';
import { RecipePreview } from '../recipePreview/recipePreview';
import { Header } from '../header';
import Footer from '../footer/footer';
import { RecipeDisplay } from '../recipeDisplay/recipeDisplay';

const SearchPage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null); 
  const [searchQuery, setSearchQuery] = useState<string>(''); 

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const data = await fetchRecipes();
        setRecipes(data);

        const tags = extractAllTags(data).sort();
        setAllTags(tags);
      } catch (error) {
        console.error('Ошибка загрузки рецептов:', error);
      }
    };

    loadRecipes();
  }, []);

  useEffect(() => {
    let filtered = recipes;

    if (selectedTag) {
      filtered = filtered.filter(recipe => recipe.tags.includes(selectedTag));
    }

    if (searchQuery) {
      filtered = filtered.filter(recipe =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredRecipes(filtered);
  }, [selectedTag, recipes, searchQuery]);

  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag);
  };

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
    <div className="content">
      <Header />
      <div className="searchPage">
        <h1>Поиск рецептов</h1>

        <div className="searchInputContainer">
          <input
            type="text"
            placeholder="Поиск по названию рецепта..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="searchInput"
          />
        </div>

        <TagDropdown
          tags={allTags}
          selectedTag={selectedTag}
          onTagSelect={handleTagSelect}
        />

        <div className="recipesGrid">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.title} className="catalogueItem" onClick={() => handleRecipeClick(recipe)}>
              <RecipePreview
                title={recipe.title}
                description={recipe.description}
                image={recipe.image_url}
                tags={recipe.tags}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />

      {selectedRecipe && (
        <div className="modal" onClick={handleOverlayClick}>
          <div className="modalContent">
            <button onClick={handleCloseRecipe} className="closeButton">Закрыть</button>
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

export default SearchPage;
