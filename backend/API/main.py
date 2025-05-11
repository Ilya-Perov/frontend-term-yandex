from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import psycopg2
import os

app = FastAPI()

# Разрешаем CORS для фронтенда
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Модель запроса
class Recipe(BaseModel):
    title: str
    description: Optional[str]
    ingredients: List[str]
    instructions: Optional[str]
    cooking_time: Optional[int]
    servings: Optional[int]
    image_url: Optional[str]
    tags: List[str]

# Подключение к БД
def get_connection():
    return psycopg2.connect(
        dbname="db",
        user="admin",
        password="pwd",
        host="db",
        port="5432"
    )

@app.post("/recipes/")
def add_recipe(recipe: Recipe):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("""
        INSERT INTO recipes (
            title, description, ingredients, instructions,
            cooking_time, servings, image_url, tags
        )
        VALUES (%s, %s, %s::text[], %s, %s, %s, %s, %s::text[])
    """, (
        recipe.title,
        recipe.description,
        recipe.ingredients,
        recipe.instructions,
        recipe.cooking_time,
        recipe.servings,
        recipe.image_url,
        recipe.tags
    ))
    conn.commit()
    cur.close()
    conn.close()
    return {"status": "ok"}

@app.get("/recipes/")
def get_recipes():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM recipes ORDER BY title ASC")
    rows = cur.fetchall()
    colnames = [desc[0] for desc in cur.description]
    cur.close()
    conn.close()
    
    recipes = [dict(zip(colnames, row)) for row in rows]
    return recipes
    