import "./HeaderSearchButton.css"
import React from 'react';

type headerSearchButtonProps = {}

export const HeaderSearchButton = () =>{
    return (
        <button 
        type='button'
        className='searchButton'>
                Поиск<br/>рецептов
        </button>
    );
};

