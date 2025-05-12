import './recipePreview.css';
import TagsContainer from '../tagsContainer/tagsContainer';
import {RecipePreviewProps} from '../../types'

export const RecipePreview = (props: RecipePreviewProps) => {
    const { title, description, image, tags } = props;
    console.log('Image Path:', image);

    const tagsDivs = tags.map(tag => <TagsContainer name={tag} key={tag} />);

    return (
        <div className='recipePreviewContainer'>
            <div className='recipePreviewImageWrapper'>
                <img
                    className='recipePreviewImage'
                    src={image ?? '/placeholder.png'}  
                    alt="Изображение для рецепта"
                />
            </div>

            <div className='recipePreviewTextContainer'>
                <div className='recipePreviewName'>{title}</div>
                <div className='recipePreviewDescription'>{description}</div>
            </div>

            <div className='recipePreviewTags'>{tagsDivs}</div>
        </div>
    );
};

