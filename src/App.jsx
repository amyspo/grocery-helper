import { meals } from "./data/meals";

import "./App.css";

function App() {
  return (
    <>
      <h1>Grocery Helper</h1>
      {meals.map((meal) => (
        <li>
          <h3>{meal.name}</h3>
          {meal.ingredients.map((ingredient) => (
            <li>{ingredient.name}</li>
          ))}
        </li>
      ))}
    </>
  );
}

export default App;
