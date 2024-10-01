export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

function IngredientList({ingredients}: {ingredients: Set<String>}) {
  const ingredientsList = Array.from(ingredients);
  return (
    ingredientsList.map((ingredient, index) => 
      <li key={index}> {ingredient} </li>
    )
  )
}

function RecipeDiv({name, ingredients, key}: {name: string, ingredients: Set<String>, key: string}) {
  return (
    <div key={key}>
      <h2> {name} </h2>
      <IngredientList ingredients={ingredients} />
    </div>
  )
}

export default function RecipeList() {
  const recipeList = recipes.map(recipe => (
    <RecipeDiv name={recipe.name} ingredients={recipe.ingredients} key={recipe.id} />
  ))
  return (
    <div>
      <h1>Recipes</h1>
      {recipeList}
    </div>
  );
}