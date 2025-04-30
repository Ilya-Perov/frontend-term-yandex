import "./HeaderCatalogueButton.css"
import React from 'react';

type headerCatalogueButtonProps = {}

export const HeaderCatalogueButton = () =>{
    return (
        <button 
        type='button'
        className='catalogueButton'>
                Каталог<br/>рецептов
        </button>
    );
};

