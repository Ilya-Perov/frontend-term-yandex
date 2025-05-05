CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    ingredients TEXT[],
    instructions TEXT,
    cooking_time INT,
    servings INT,
    image_url TEXT,
    tags: TEXT[],
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO recipes (
    title, description, ingredients, instructions, cooking_time, servings, image_url
) VALUES
(
    'Панкейки на молоке',
    'Классические американские панкейки на завтрак.',
    ARRAY['молоко', 'яйцо', 'мука', 'разрыхлитель', 'сахар', 'соль', 'масло'],
    'Смешайте все ингредиенты, выпекайте на сковороде по 2–3 минуты с каждой стороны.',
    20,
    4,
    'https://example.com/images/pancakes.jpg',
    ARRAY['tasty', 'good', 'sweet']
),
(
    'Паста с томатным соусом',
    'Простой рецепт пасты с домашним томатным соусом.',
    ARRAY['паста', 'помидоры', 'чеснок', 'базилик', 'оливковое масло', 'соль'],
    'Отварите пасту. Обжарьте чеснок, добавьте помидоры, тушите 10 минут. Смешайте с пастой.',
    25,
    2,
    'https://example.com/images/pasta.jpg',
    ARRAY['tasty', 'good', 'umami']
),
(
    'Салат Цезарь',
    'Классический салат с курицей и соусом Цезарь.',
    ARRAY['куриная грудка', 'салат ромэн', 'пармезан', 'сухарики', 'соус Цезарь'],
    'Обжарьте курицу, нарежьте салат, добавьте остальные ингредиенты и соус. Перемешайте.',
    15,
    2,
    'https://example.com/images/caesar.jpg',
    ARRAY['tasty', 'good', 'umami']
);
