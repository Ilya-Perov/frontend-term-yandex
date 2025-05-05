import { useState } from "react";
import { RecipeInput } from "../recipeInput/recipeInput";
import { RecipePreview } from "../recipePreview/recipePreview";
import { Header } from "../header";
import "./recipeConstructor.css";

export const RecipeConstructor = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [tags, setTags] = useState<string[]>([]);

    return (
        <div className="recipeConstructor">
            <Header />
            <div className="recipeConstructorTitle">Конструктор рецептов</div>
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
                />
            </div>
        </div>
    );
};
