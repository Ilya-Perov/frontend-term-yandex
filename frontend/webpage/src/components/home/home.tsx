import '../../vendor/normalize.css';
import '../../fonts/font.css';
import './home.css';
import { Header } from '../header/index';
import { GoToConstructorButton } from '../button/GoToConstructorButton/GoToConstructorButton';

export const Home = () => {
    return (
        <div className='home'>
            <Header />
            <div className='homeContent'>
                <h1 className='homeTitle'>Добро пожаловать на сайт "Все рецепты здесь"!</h1>
                <p className='homeDescription'>
                    Здесь вы можете создавать, редактировать и делиться своими любимыми рецептами.
                    Пошаговые инструкции, точные ингредиенты, время приготовления и советы — всё,
                    чтобы ваши блюда всегда получались вкусными и аппетитными.
                </p>
                <p className='homeInstructions'>
                    Для того, чтобы начать, просто создайте новый рецепт в разделе "Конструктор рецептов" и поделитесь им с миром.
                    С нами кулинария станет ещё увлекательней!
                </p>
            </div>
            <GoToConstructorButton/>
        </div>
    );
};
