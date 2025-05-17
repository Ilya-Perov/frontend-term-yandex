import { render, screen, fireEvent } from '@testing-library/react';
import TagDropdown from '../components/searchPage/__tagDropdown/searchPage_tagDropdown';

beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterAll(() => {
  (console.log as jest.Mock).mockRestore();
});

describe('TagDropdown', () => {
  const tags = ['React', 'JavaScript', 'TypeScript'];

  test('рендерит опцию "Все теги" и все переданные теги', () => {
    render(
      <TagDropdown tags={tags} selectedTag={null} onTagSelect={() => {}} />,
    );

    expect(
      screen.getByRole('option', { name: 'Все теги' }),
    ).toBeInTheDocument();

    tags.forEach((tag) => {
      expect(screen.getByRole('option', { name: tag })).toBeInTheDocument();
    });
  });

  test('правильно отображает выбранный тег', () => {
    render(
      <TagDropdown
        tags={tags}
        selectedTag="JavaScript"
        onTagSelect={() => {}}
      />,
    );
    const select = screen.getByRole('combobox') as HTMLSelectElement;
    expect(select.value).toBe('JavaScript');
  });

  test('вызывает onTagSelect с выбранным значением при смене', () => {
    const onTagSelect = jest.fn();
    render(
      <TagDropdown tags={tags} selectedTag={null} onTagSelect={onTagSelect} />,
    );

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'React' } });

    expect(onTagSelect).toHaveBeenCalledTimes(1);
    expect(onTagSelect).toHaveBeenCalledWith('React');
  });

  test('если selectedTag равен null, select показывает пустое значение', () => {
    render(
      <TagDropdown tags={tags} selectedTag={null} onTagSelect={() => {}} />,
    );
    const select = screen.getByRole('combobox') as HTMLSelectElement;
    expect(select.value).toBe('');
  });
});
