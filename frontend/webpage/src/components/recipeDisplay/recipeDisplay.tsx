import './recipeDisplay.css';

interface RecipeDisplayProps {
    title: string;
    description: string;
    image: string;
    tags: string[];
    ingredients: string[];
    cookingTime: number;
    serving: number;
    instructions: string;
}

export const RecipeDisplay = ({
    title,
    description,
    image,
    tags,
    ingredients,
    cookingTime,
    serving,
    instructions
}: RecipeDisplayProps) => {
    return (
        <div className="recipeDisplayContainer">
            <h1 className="recipeDisplayTitle">{title || 'Без названия'}</h1>
            <p className="recipeDisplayDescription">{description || 'Нет описания'}</p>
            {image && (
                <img className="recipeDisplayImage" src={image} alt={title} />
            )}

            <div className="recipeDisplayTags">
                {tags.length > 0 ? tags.map(tag => (
                    <span key={tag} className="recipeDisplayTag">{tag}</span>
                )) : <span className="recipeDisplayTag">Без тегов</span>}
            </div>

            <h2 className="recipeDisplaySectionTitle">Ингредиенты</h2>
            <ul className="recipeDisplayList">
                {ingredients.length > 0 ? ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                )) : <li>Нет ингредиентов</li>}
            </ul>

            <h2 className="recipeDisplaySectionTitle">Инструкция</h2>
            <p className="recipeDisplayInstructions">{instructions || 'Инструкция не указана'}</p>

            <h2 className="recipeDisplaySectionTitle">Время и порции</h2>
            <div className="recipeDisplayInstructions">
                ⏱ Время: {cookingTime > 0 ? `${cookingTime} мин` : 'Не указано'} <br />
                🍽 Порций: {serving > 0 ? serving : 'Не указано'}
            </div>
        </div>
    );
};
