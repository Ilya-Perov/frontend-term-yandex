import './recipePreview.css';
import TagsContainer from '../tagsContainer/tagsContainer';
import React from 'react';

type RecipePreviewProps = {
    image?: string | File,  // Исправил: заменил String на string
    tags: Array<string>,    // Исправил: заменил String на string
    name: string,           // Исправил: заменил String на string
    description: string     // Исправил: заменил String на string
};

export const RecipePreview = (props: RecipePreviewProps) => {
    const { image, tags, name, description } = props;
    
    // Если image - это объект типа File, то создаем URL для него
    const imageSrc = image instanceof File ? URL.createObjectURL(image) : image;

    const tagsDivs = tags.map(tag => <TagsContainer name={tag} key={tag} />);

    return (
        <div className='recipePreviewContainer'>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <img
                    className='recipePreviewImage'
                    src={imageSrc ?? ''}  // Если imageSrc не определено, передаем пустую строку
                    alt="Recipe"
                />
                <div className='recipePreviewTextContainer'>
                    <div className='recipePreviewName'>{name}</div>
                    <div className='recipePreviewDescription'>{description}</div>
                </div>
            </div>
            <div className='recipePreviewTags'>{tagsDivs}</div>
        </div>
    );
};
