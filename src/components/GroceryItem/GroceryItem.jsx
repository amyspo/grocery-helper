import React from "react";
import styles from "../GroceryItem/GroceryItem.module.css";

function GroceryItem({ ingredient }) {
  const [checked, setChecked] = React.useState(false);

  return (
    <li className={checked ? styles.checked : undefined}>
      <div className={styles.item}>
        <label className={styles.label}>
          <input
            type="checkbox"
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
          />
          {ingredient.name}
          <span>
            {" "}
            {ingredient.quantity} {ingredient.unit}
          </span>
        </label>
      </div>
    </li>
  );
}

export default GroceryItem;
