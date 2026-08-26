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

  const finalIngredients = [];

  selectedIngredients.forEach((testIngredient) => {
    const finalIngredient = finalIngredients.find(
      (finalIngredient) => finalIngredient.name === testIngredient.name,
    );
    if (finalIngredient) {
      finalIngredient.quantity =
        finalIngredient.quantity + testIngredient.quantity;
    } else {
      finalIngredients.push({
        name: testIngredient.name,
        quantity: testIngredient.quantity,
        type: testIngredient.type,
        unit: testIngredient.unit,
      });
    }
    console.log(finalIngredient);
  });

  return (
    <>
      {chosenMeals.length === 0 && <p>No Meals Chosen</p>}
      <ul>
        {finalIngredients.map((ingredient, index) => (
          <GroceryItem key={index} ingredient={ingredient} />
        ))}
      </ul>
    </>
  );
}

export default GroceryList;
