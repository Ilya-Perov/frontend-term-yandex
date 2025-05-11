import './recipePreview.css';
import TagsContainer from '../tagsContainer/tagsContainer';
import {RecipePreviewProps} from '../../types'

export const RecipePreview = (props: RecipePreviewProps) => {
    const { title, description, image, tags  } = props;
    

    const tagsDivs = tags.map(tag => <TagsContainer name={tag} key={tag} />);

    return (
        <div className='recipePreviewContainer'>
            <div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <img
                    className='recipePreviewImage'
                    src={image ?? ''}  
                    alt="Изображение для рецепта"
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
