import React from "react";
import GroceryList from "../GroceryList";
import { meals } from "../../data/meals";
import styles from "../MealCard/MealCard.module.css";

function MealCard() {
  const [chosenMeals, setChosenMeals] = React.useState([]);
  const [listView, setListView] = React.useState(false);

  function getID(id) {
    const nextMeals = [...chosenMeals];
    if (nextMeals.includes(id)) {
      const newMeals = nextMeals.filter((n) => n !== id);
      setChosenMeals(newMeals);
      return;
    } else nextMeals.push(id);

    setChosenMeals(nextMeals);
    console.log(chosenMeals);
  }

  function handleClick() {
    if (listView) {
      setChosenMeals([]);
    } else {
      // generate list
    }
    setListView(!listView);
  }

  return (
    <>
      {listView === false ? (
        <ul>
          {meals.map((meal) => (
            <li key={meal.id}>
              <div className={styles.wrapper}>
                <h4>{meal.name}</h4>
                <input
                  id={meal.id}
                  type="checkbox"
                  onChange={() => {
                    getID(meal.id);
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <GroceryList chosenMeals={chosenMeals} />
      )}
      <button onClick={handleClick}>
        {listView ? "Return to Meals" : "Generate List"}
      </button>
    </>
  );
}

export default MealCard;
