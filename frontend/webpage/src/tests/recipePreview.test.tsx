import { render, screen } from '@testing-library/react';
import RecipePreview from '../components/recipePreview/recipePreview';

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
};

describe('RecipePreview', () => {
  it('отображает название рецепта', () => {
    render(<RecipePreview {...mockProps} />);
    expect(screen.getByText(/Шакшука/i)).toBeInTheDocument();
  });

  it('отображает описание рецепта', () => {
    render(<RecipePreview {...mockProps} />);
    expect(screen.getByText(/Яичница в томатном соусе/i)).toBeInTheDocument();
  });

  it('отображает изображение рецепта', () => {
    render(<RecipePreview {...mockProps} />);
    const image = screen.getByAltText(
      /Изображение для рецепта/i,
    ) as HTMLImageElement;
    expect(image.src).toContain(mockProps.image);
  });

  it('отображает теги, если они есть', () => {
    render(<RecipePreview {...mockProps} />);
    expect(screen.getByText('завтрак')).toBeInTheDocument();
    expect(screen.getByText('вегетарианское')).toBeInTheDocument();
  });

  it('отображает сообщение "Без тегов", если тегов нет', () => {
    render(<RecipePreview {...mockProps} tags={[]} />);
    expect(screen.getByText(/Без тегов/i)).toBeInTheDocument();
  });

  it('использует placeholder, если не передано изображение', () => {
    render(<RecipePreview {...mockProps} image={undefined} />);
    const image = screen.getByAltText(
      /Изображение для рецепта/i,
    ) as HTMLImageElement;
    expect(image.src).toContain('/placeholder.png');
  });
});
