import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import CatalogueBody from '../components/catalogue/_body/catalogue_body';
import * as api from '../api/api'; // путь подкорректируй под свой

// Мокаем fetchRecipes
jest.mock('../api/api');

const mockedFetchRecipes = api.fetchRecipes as jest.MockedFunction<
  typeof api.fetchRecipes
>;

beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterAll(() => {
  (console.log as jest.Mock).mockRestore();
});

describe('CatalogueBody интеграционное тестирование', () => {
  const mockRecipes = [
    {
      id: 1,
      title: 'Тестовый рецепт',
      description: 'Описание рецепта',
      image_url: 'http://example.com/image.jpg',
      tags: ['тег1', 'тег2'],
      ingredients: ['ингредиент 1', 'ингредиент 2'], // обязательно
      cooking_time: 30,
      servings: 4,
      instructions: 'Приготовить всё вместе.',
    },
  ];

  beforeEach(() => {
    mockedFetchRecipes.mockResolvedValue(mockRecipes);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('загружает рецепты и открывает модальное окно при клике на рецепт', async () => {
    render(<CatalogueBody />);

    // Проверяем, что рецепт загрузился и отображается
    await waitFor(() => {
      expect(screen.getByText('Тестовый рецепт')).toBeInTheDocument();
    });

    // Кликаем по карточке рецепта
    fireEvent.click(screen.getByText('Тестовый рецепт'));

    // Проверяем, что открылось модальное окно с описанием
    await waitFor(() => {
      expect(screen.getByText('Приготовить всё вместе.')).toBeInTheDocument();
    });
  });
});
