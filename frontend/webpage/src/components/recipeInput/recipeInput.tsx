import './recipeInput.css';

interface RecipeInputProps {
    title: string;
    setTitle: (value: string) => void;
    description: string;
    setDescription: (value: string) => void;
    image: string;
    setImage: (value: string) => void;
    tags: string[];
    setTags: (value: string[]) => void;
    ingredients: string[];
    setIngredients: (value: string[]) => void;
    cookingTime: number;
    setCookingTime: (value: number) => void;
    serving: number;
    setServing: (value: number) => void;
    instructions: string;
    setInstructions: (value: string) => void;
}

export const RecipeInput = ({
    title, setTitle,
    description, setDescription,
    image, setImage,
    tags, setTags,
    ingredients, setIngredients,
    cookingTime, setCookingTime,
    serving, setServing,
    instructions, setInstructions
}: RecipeInputProps) => {
    return (
        <div>
            <div className='recipeInputBody'>
                <div className='recipeInputText'>Введите название</div>
                <input
                    className='recipeInputField'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    maxLength={35}
                />

                <div className='recipeInputText'>Введите описание</div>
                <input
                    className='recipeInputField'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <div className='recipeInputText'>Введите ссылку на изображение</div>
                <input
                    className='recipeInputField'
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    type='url'
                />

                <div className='recipeInputText'>Введите теги (через запятую)</div>
                <input
                    className='recipeInputField'
                    value={tags.join(', ')}
                    onChange={(e) => setTags(e.target.value.split(',').map(tag => tag.trim()))}
                />

                <div className='recipeInputText'>Введите ингредиенты (через запятую)</div>
                <input
                    className='recipeInputField'
                    value={ingredients.join(', ')}
                    onChange={(e) => setIngredients(e.target.value.split(',').map(i => i.trim()))}
                />

                <div className='recipeInputText'>Введите время приготовления (в минутах)</div>
                <input
                    className='recipeInputField'
                    type='number'
                    value={cookingTime}
                    onChange={(e) => setCookingTime(Number(e.target.value))}
                />

                <div className='recipeInputText'>Введите количество порций</div>
                <input
                    className='recipeInputField'
                    type='number'
                    value={serving}
                    onChange={(e) => setServing(Number(e.target.value))}
                />

                <div className='recipeInputText'>Введите инструкции</div>
                <textarea
                    className='recipeInputField'
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    rows={6}
                />
            </div>
        </div>
    );
};
