import axios from 'axios';

const API_URL = 'http://localhost:8000/recipes/';

export const createRecipe = async (payload: any) => {
  return await axios.post(API_URL, payload);
};

// api.ts
export const fetchRecipes = async () => {
  try {
    const response = await fetch('http://localhost:8000/recipes/');
    if (!response.ok) {
      throw new Error('Ошибка при загрузке рецептов');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
