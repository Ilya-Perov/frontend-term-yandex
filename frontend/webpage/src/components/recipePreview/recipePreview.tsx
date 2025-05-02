import './recipePreview.css';
import TagsContainer from '../tagsContainer/tagsContainer';
import React from 'react';
import logo from "../../images/logo.png"

type RecipePreviewProps = {
    image?: File,
    tags: Array<String>,
    name: String,
    description: String
};

export const RecipePreview = (props: RecipePreviewProps) =>{
    const {image, tags, name, description} = props;
    const tagsDivs = tags.map(tag => <TagsContainer name={tag}/>);
    return(
        <div className='recipePreviewContainer'>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <img
                    className='recipePreviewImage'
                    src={logo}/>
                <div className='recipePreviewTextContainer'>
                    <div className='recipePreviewName'>{name}</div>
                    <div className='recipePreviewDescription'>{description}</div>
                </div>
            </div>
            <div className='recipePreviewTags'>{tagsDivs}</div>
        </div>
    );
};