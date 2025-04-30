import './header.css';
import logo from "../../images/logo.png";
import React from 'react';

export const WebpageTitle = () =>{
    return(
        <div>
            <div className='headerContainer'>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <img 
                    className='headerImage' 
                    src={logo}
                    alt='Лого вебсайта &quot;Все рецепты здесь&quot;'/>
                    <div className='headerText'>Все рецепты здесь</div>
                </div>
                <div className='headerText'></div>
            </div>
            
        </div>
    );
};