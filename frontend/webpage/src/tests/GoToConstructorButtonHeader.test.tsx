import { render, screen, fireEvent } from '@testing-library/react';
import HeaderConstructorButton from '../components/header/__constructorButton/header__constructorButton';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterAll(() => {
  (console.log as jest.Mock).mockRestore();
});

describe('GoToConstructorButtonHeader', () => {
  it('должен навигировать на /recipeConstructor при клике', () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    render(<HeaderConstructorButton />);

    const button = screen.getByRole('button', {
      name: /Конструктор рецептов/i,
    });
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith('/recipeConstructor');
  });
});
