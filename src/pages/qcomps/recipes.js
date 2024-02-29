import React from 'react';
import { recipes } from './recipes'; // Import the recipes array

export default function RecipeList() {
  return (
      <div>
        <h1>Recipes</h1>
        <ul>
          {recipes.map(recipe => (
              <li key={recipe.id}>
                <h2>{recipe.name}</h2>
                <h3>Ingredients:</h3>
                <ul>
                  {Array.from(recipe.ingredients).map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </li>
          ))}
        </ul>
      </div>
  );
}
