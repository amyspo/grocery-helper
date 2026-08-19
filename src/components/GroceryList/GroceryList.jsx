import React from "react";
import { meals } from "../../data/meals";

function GroceryList({ chosenMeals }) {
  const selectedMeals = meals.filter((meal) => chosenMeals.includes(meal.id));

  return (
    <>
      {chosenMeals.length === 0 && <p>No Meals Chosen</p>}
      <ul>
        {selectedMeals.map((meal) => (
          <>
            {meal.ingredients.map((ingredient) => (
              <li>{ingredient.name}</li>
            ))}
          </>
        ))}
      </ul>
    </>
  );
}

export default GroceryList;
