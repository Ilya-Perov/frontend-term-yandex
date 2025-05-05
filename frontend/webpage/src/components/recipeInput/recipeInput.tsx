import './recipeInput.css'

interface RecipeInputProps {
    title: string;
    setTitle: (value: string) => void;
    description: string;
    setDescription: (value: string) => void;
    image: string;
    setImage: (value: string) => void;
    tags: string[];
    setTags: (value: string[]) => void;
}

export const RecipeInput = ({ title, setTitle, description, setDescription, image, setImage, tags, setTags }: RecipeInputProps) => {
    return (
        <div>
            <div>
                <div className='recipeInputText'>Введите название</div>
                <input
                    className='recipeInputField'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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
                />
                <div className='recipeInputText'>Введите теги (через запятую)</div>
                <input
                    className='recipeInputField'
                    value={tags.join(', ')}
                    onChange={(e) => setTags(e.target.value.split(',').map(tag => tag.trim()))}
                />
            </div>
        </div>
    );
};
