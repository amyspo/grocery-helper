import React from "react";
import { meals } from "../../data/meals";
import styles from "../GroceryList/GroceryList.module.css";
import GroceryItem from "../GroceryItem/GroceryItem";

function GroceryList({ chosenMeals }) {
  const selectedIngredients = [];
  const selectedMeals = meals.filter((meal) => chosenMeals.includes(meal.id));

  selectedMeals.forEach((meal) => {
    meal.ingredients.forEach((ingredient) => {
      selectedIngredients.push(ingredient);
    });
  });

  selectedIngredients.sort((ingredientA, ingredientB) => {
    if (ingredientA.type.toUpperCase() < ingredientB.type.toUpperCase()) {
      return -1;
    } else {
      return 1;
    }
  });

  return (
    <>
      {chosenMeals.length === 0 && <p>No Meals Chosen</p>}
      <ul>
        {selectedIngredients.map((ingredient) => (
          <GroceryItem ingredient={ingredient} />
        ))}
      </ul>
    </>
  );
}

export default GroceryList;
