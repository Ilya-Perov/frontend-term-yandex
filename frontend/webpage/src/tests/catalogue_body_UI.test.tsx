import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CatalogueBody from '../components/catalogue/_body/catalogue_body';
import * as api from '../api/api';

jest.mock('../api/api');

beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterAll(() => {
  (console.log as jest.Mock).mockRestore();
});

const mockRecipes = [
  {
    id: 1,
    title: 'Овсянка с ягодами',
    description: 'Простой и полезный завтрак',
    image_url: '/images/oatmeal.jpg',
    tags: ['завтрак', 'здоровое питание'],
    ingredients: ['овсяные хлопья', 'ягоды', 'мёд'],
    cooking_time: 10,
    servings: 1,
    instructions: 'Смешать овсянку с ягодами и мёдом.',
  },
];

test('открывает модальное окно с рецептом при клике на карточку', async () => {
  (api.fetchRecipes as jest.Mock).mockResolvedValue(mockRecipes);

  render(<CatalogueBody />);

  // Ждём, пока загрузится и отобразится рецепт
  await waitFor(() => {
    expect(screen.getByText('Овсянка с ягодами')).toBeInTheDocument();
  });

  // Кликаем на карточку рецепта
  userEvent.click(screen.getByText('Овсянка с ягодами'));

  // Проверяем, что открылось модальное окно с подробностями рецепта
  await waitFor(() => {
    expect(
      screen.getByText('Смешать овсянку с ягодами и мёдом.'),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /закрыть/i }),
    ).toBeInTheDocument();
  });
});
