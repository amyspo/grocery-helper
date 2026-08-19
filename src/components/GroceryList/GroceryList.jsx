import React from "react";
import { meals } from "../../data/meals";

function GroceryList({ chosenMeals }) {
  const selectedMeals = meals.filter((meal) => chosenMeals.includes(meal.id));

  return (
    <ul>
      {selectedMeals.map((meal) => (
        <>
          {meal.ingredients.map((ingredient) => (
            <li>{ingredient.name}</li>
          ))}
        </>
      ))}
    </ul>
  );
}

export default GroceryList;
