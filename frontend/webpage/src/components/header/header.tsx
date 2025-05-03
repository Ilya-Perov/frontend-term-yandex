import './header.css';
import logo from "../../images/logo.png";
import { HeaderSearchButton } from '../button/HeaderSearchButton/index';
import { HeaderCatalogueButton } from '../button/HeaderCatalogueButton/index';
import React from 'react';

export const Header = () => {
    return (
        <div>
            <div className='headerContainer'>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <a href="/index.html">
                        <img
                            className='headerImage'
                            src={logo}
                            alt='Лого вебсайта "Все рецепты здесь"' />
                    </a>
                    <div className='headerText'>Все рецепты здесь</div>
                </div>
                <div className='headerText'></div>
                <div className='headerButtonContainer'>
                    <HeaderCatalogueButton />
                    <HeaderSearchButton />
                </div>
            </div>
        </div>
    );
};
