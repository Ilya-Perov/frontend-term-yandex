import './recipePreview.css';
import TagsContainer from '../tagsContainer/tagsContainer';
import {RecipePreviewProps} from '../../types'

export const RecipePreview = (props: RecipePreviewProps) => {
    const { title, description, image, tags  } = props;
    
    // Если image - это объект типа File, то создаем URL для него
    const imageSrc = image instanceof File ? URL.createObjectURL(image) : image;

    const tagsDivs = tags.map(tag => <TagsContainer name={tag} key={tag} />);

    return (
        <div className='recipePreviewContainer'>
            <div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <img
                    className='recipePreviewImage'
                    src={imageSrc ?? ''}  // Если imageSrc не определено, передаем пустую строку
                    alt="Recipe"
                />
                <div className='recipePreviewTextContainer'>
                    <div className='recipePreviewName'>{title}</div>
                    <div className='recipePreviewDescription'>{description}</div>
                </div>
            </div>
            </div>
            <div className='recipePreviewTags'>{tagsDivs}</div>
        </div>
    );
};
