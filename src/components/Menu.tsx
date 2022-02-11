import React from "react";
import { IRecipe } from "../model/IRecipe";
import Recipe from "./Recipe";

function Menu({
  title,
  menu,
}: {
  title: String;
  menu: IRecipe[];
}): React.ReactElement | null {
  return (
    <div>
      <h1>{title}</h1>
      {menu.map((m) => (
        <Recipe
          recipeName={m.name}
          ingredients={m.ingredients}
          steps={m.steps}
          key={m.name}
        />
      ))}
    </div>
  );
}

export default Menu;
