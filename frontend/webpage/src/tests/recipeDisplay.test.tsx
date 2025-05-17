import { render, screen } from '@testing-library/react';
import RecipeDisplay from '../components/recipeDisplay/recipeDisplay';

beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterAll(() => {
  (console.log as jest.Mock).mockRestore();
});

const mockProps = {
  title: 'Шакшука',
  description: 'Яичница в томатном соусе с овощами и специями.',
  image: 'shakshuka.jpg',
  tags: ['завтрак', 'вегетарианское'],
  ingredients: ['Яйца', 'Томаты', 'Специи'],
  cookingTime: 20,
  servings: 2,
  instructions: 'Смешать и готовить на сковороде.',
};

describe('RecipeDisplay', () => {
  it('рендерит заголовок, описание и изображение', () => {
    render(<RecipeDisplay {...mockProps} />);
    expect(screen.getByText(/Шакшука/i)).toBeInTheDocument();
    expect(screen.getByText(/Яичница в томатном соусе/i)).toBeInTheDocument();
    const image = screen.getByAltText(/Шакшука/i) as HTMLImageElement;
    expect(image.src).toContain('shakshuka.jpg');
  });

  it('рендерит теги, ингредиенты и инструкции', () => {
    render(<RecipeDisplay {...mockProps} />);
    expect(screen.getByText('завтрак')).toBeInTheDocument();
    expect(screen.getByText('вегетарианское')).toBeInTheDocument();

    expect(screen.getByText('Яйца')).toBeInTheDocument();
    expect(screen.getByText('Томаты')).toBeInTheDocument();
    expect(screen.getByText('Специи')).toBeInTheDocument();

    expect(
      screen.getByText(/Смешать и готовить на сковороде./i),
    ).toBeInTheDocument();
  });

  it('показывает сообщение "Без тегов" если теги пустые', () => {
    render(<RecipeDisplay {...mockProps} tags={[]} />);
    expect(screen.getByText(/Без тегов/i)).toBeInTheDocument();
  });

  it('показывает "Нет ингредиентов" если список ингредиентов пуст', () => {
    render(<RecipeDisplay {...mockProps} ingredients={[]} />);
    expect(screen.getByText(/Нет ингредиентов/i)).toBeInTheDocument();
  });

  it('показывает "Инструкция не указана" если инструкции нет', () => {
    render(<RecipeDisplay {...mockProps} instructions="" />);
    expect(screen.getByText(/Инструкция не указана/i)).toBeInTheDocument();
  });

  it('показывает корректное время и порции', () => {
    render(<RecipeDisplay {...mockProps} />);
    expect(screen.getByText(/⏱ Время: 20 мин/i)).toBeInTheDocument();
    expect(screen.getByText(/🍽 Порций: 2/i)).toBeInTheDocument();
  });

  it('показывает "Не указано" если время и порции нулевые', () => {
    render(<RecipeDisplay {...mockProps} cookingTime={0} servings={0} />);
    expect(screen.getByText(/⏱ Время: Не указано/i)).toBeInTheDocument();
    expect(screen.getByText(/🍽 Порций: Не указано/i)).toBeInTheDocument();
  });

  it('показывает "Без названия" и "Нет описания" если эти поля пустые', () => {
    render(<RecipeDisplay {...mockProps} title="" description="" />);
    expect(screen.getByText(/Без названия/i)).toBeInTheDocument();
    expect(screen.getByText(/Нет описания/i)).toBeInTheDocument();
  });
});
