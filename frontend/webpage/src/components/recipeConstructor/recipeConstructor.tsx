import { useState } from "react";
import { RecipeInput } from "../recipeInput/recipeInput";
import { RecipePreview } from "../recipePreview/recipePreview";
import { Header } from "../header";
import { RecipeDisplay } from "../recipeDisplay/recipeDisplay";
import "./recipeConstructor.css";

export const RecipeConstructor = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [tags, setTags] = useState<string[]>([]);
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [cookingTime, setCookingtime] = useState(0);
    const [serving, setServing] = useState(0);
    const [instructions, setInstructions] = useState('');

    return (
        <div className="recipeConstructor">
            <Header />
            <div className="recipeConstructorTitle">Конструктор рецептов</div>
            <div className='recipeConstructorDivider'></div>

            <div className="recipeConstructorTitle">Превью рецепта</div>
            <div className="recipeConstructorBody">
                <RecipePreview 
                    title={title || 'Без названия'} 
                    description={description || 'Без описания'} 
                    image={image} 
                    tags={tags.length > 0 ? tags : ['Без тегов']} 
                />
                <RecipeInput 
                    title={title}
                    setTitle={setTitle}
                    description={description}
                    setDescription={setDescription}
                    image={image}
                    setImage={setImage}
                    tags={tags}
                    setTags={setTags}
                    ingredients={ingredients}
                    setIngredients={setIngredients}
                    cookingTime={cookingTime}
                    setCookingTime={setCookingtime}
                    serving={serving}
                    setServing={setServing}
                    instructions={instructions}
                    setInstructions={setInstructions}
                />
            </div>

            <div className='recipeConstructorDivider'></div>
            <div className="recipeConstructorTitle">Превью полного рецепта</div>
            <RecipeDisplay
                title={title || 'Без названия'}
                description={description || 'Без описания'}
                image={image}
                tags={tags.length > 0 ? tags : ['Без тегов']}
                ingredients={ingredients.length > 0 ? ingredients : ['Нет ингредиентов']}
                cookingTime={cookingTime}
                serving={serving}
                instructions={instructions || 'Нет инструкции'}
            />
        </div>
    );
};
