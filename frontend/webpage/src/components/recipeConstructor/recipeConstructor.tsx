import { useState, useEffect } from "react";
import { RecipeInput } from "../recipeInput/recipeInput";
import { RecipePreview } from "../recipePreview/recipePreview";
import { Header } from "../header";
import { RecipeDisplay } from "../recipeDisplay/recipeDisplay";
import { createRecipe } from "../api/api"; 
import './recipeConstructor.css';

export const RecipeConstructor = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [ingredientsInput, setIngredientsInput] = useState('');
  const [cookingTime, setCookingtime] = useState(0);
  const [serving, setServing] = useState(0);
  const [instructions, setInstructions] = useState('');

  useEffect(() => {
    setIngredientsInput(ingredients.join(', '));
  }, [ingredients]);

  const handleSubmit = async () => {
    const payload = {
      title,
      description,
      ingredients,
      instructions,
      cooking_time: cookingTime,
      servings: serving,
      image_url: image,
      tags
    };

    try {
      await createRecipe(payload);
      alert('Рецепт успешно сохранен');
      handleReset();
    } catch (err) {
      console.error('Ошибка при сохранении рецепта:', err);
      alert('Ошибка при сохранении рецепта');
    }
  };

  const handleReset = () => {
    setTitle('');
    setDescription('');
    setIngredients([]);
    setIngredientsInput('');
    setCookingtime(0);
    setServing(0);
    setImage('');
    setTags([]);
    setInstructions('');
  };

  return (
    <div className="recipeConstructor">
      <Header />
      <div className="recipeConstructorTitle">Конструктор рецептов</div>
      <div className="recipeConstructorDivider"></div>

      <div className="recipeConstructorTitle">Превью рецепта</div>
      <div className="recipeConstructorBody">
        <div className="recipePreviewWrapper">
          <RecipePreview
            title={title || 'Без названия'}
            description={description || 'Без описания'}
            image={image}
            tags={tags.length > 0 ? tags : ['Без тегов']}
          />
        </div>
        
        <RecipeInput
          title={title}
          description={description}
          image={image}
          tags={tags}
          ingredients={ingredients}
          ingredientsInput={ingredientsInput}
          cookingTime={cookingTime}
          serving={serving}
          instructions={instructions}
          setTitle={setTitle}
          setDescription={setDescription}
          setImage={setImage}
          setTags={setTags}
          setIngredients={setIngredients}
          setIngredientsInput={setIngredientsInput}
          setCookingTime={setCookingtime}
          setServing={setServing}
          setInstructions={setInstructions}
        />
      </div>

      <div className="recipeConstructorDivider"></div>
      <div className="recipeConstructorTitle">Превью полного рецепта</div>
      <RecipeDisplay
        title={title || 'Без названия'}
        description={description || 'Без описания'}
        image={image}
        tags={tags.length > 0 ? tags : ['Без тегов']}
        ingredients={ingredients.length > 0 ? ingredients : ['Нет ингредиентов']}
        cookingTime={cookingTime}
        servings={serving}
        instructions={instructions || 'Нет инструкции'}
      />

      <div className="formButtonContainer">
        <button className="formButton save" onClick={handleSubmit}>Сохранить</button>
        <button className="formButton reset" onClick={handleReset}>Сбросить</button>
      </div>
    </div>
  );
};
