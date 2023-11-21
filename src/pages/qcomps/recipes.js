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

export default function RecipeList() {
  const listItems = recipes.map((recipe) => (
    <li key={recipe.id}>
      <h2>{recipe.name}</h2>
      <ul>
        {Array.from(recipe.ingredients).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </li>
  ));
  return (
    <div>
      <h1>Recipes</h1>
      <ul>{listItems}</ul>
    </div>
  );
}