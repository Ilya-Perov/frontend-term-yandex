import '../../vendor/normalize.css';
import '../../fonts/font.css';
import './home.css';
import { Header } from '../header/index';
import { GoToConstructorButton } from '../button/GoToConstructorButton/GoToConstructorButton';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import { fetchRecipes } from '../api/api';
import { RecipePreview } from '../recipePreview/recipePreview'; // путь может отличаться
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../types'
import { Recipe } from '../../types';
import Footer from '../footer/footer'
import { RecipeDisplay } from '../recipeDisplay/recipeDisplay'; // Импортируем компонент для отображения рецепта в модальном окне

export const Home = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null); // Состояние для выбранного рецепта

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const data = await fetchRecipes();
        const lastFive = data.slice(-5).reverse();
        console.log(data);
        setRecipes(lastFive);
      } catch (error) {
        console.error('Ошибка загрузки рецептов:', error);
      }
    };

    loadRecipes();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1.5, // чуть больше одной карточки видно
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px',
        },
      },
    ],
  };

  // Обработчик для открытия модального окна
  const handleRecipeClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  // Обработчик для закрытия модального окна
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
    <div className='home'>
      <Header />
      <div className='homeContent'>
        <h1 className='homeTitle'>Добро пожаловать на сайт "Все рецепты здесь"!</h1>
        <p className='homeDescription'>
          Здесь вы можете создавать, редактировать и делиться своими любимыми рецептами.
          Пошаговые инструкции, точные ингредиенты, время приготовления и советы — всё,
          чтобы ваши блюда всегда получались вкусными и аппетитными.
        </p>
        <p className='homeInstructions'>
          Для того, чтобы начать, просто создайте новый рецепт в разделе "Конструктор рецептов" и поделитесь им с миром.
          С нами кулинария станет ещё увлекательней!
        </p>
      </div>

      <div className="homeCarousel">
        <h2 className="carouselTitle">Последние рецепты</h2>
        <Slider {...sliderSettings}>
          {recipes.map((recipe) => (
            <div key={recipe.id} className="carouselItem" onClick={() => handleRecipeClick(recipe)}>
              <RecipePreview
                title={recipe.title}
                description={recipe.description}
                image={recipe.image_url}
                tags={recipe.tags}
              />
            </div>
          ))}
        </Slider>
      </div>
      <GoToConstructorButton />
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
