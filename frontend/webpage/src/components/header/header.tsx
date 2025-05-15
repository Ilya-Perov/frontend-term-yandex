import './header.css';
import logo from "../../images/logo.png";
import { HeaderSearchButton } from '../button/HeaderSearchButton/index';
import { HeaderCatalogueButton } from '../button/HeaderCatalogueButton/index';
import { GoToConstructorButtonHeader } from '../button/GoToConsturctorButtonHeader/GoToConstructorButtonHeader';


export const Header = () => {
    return (
        <div>
            <div className='headerContainer'>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <a href="/">
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
                    <GoToConstructorButtonHeader />
                </div>
            </div>
        </div>
    );
};
