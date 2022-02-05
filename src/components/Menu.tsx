import React from "react";
import Recipe from "./Recipe";

function Menu({
  title,
  menu,
}: {
  title: String;
  menu: any;
}): React.ReactElement | null {
  return (
    <div>
      <h1>{title}</h1>
      {menu.map((m: any) => (
        <Recipe
          recipeName={m.name}
          ingredients={m.ingredients}
          steps={m.steps}
          key={m.id}
        />
      ))}
    </div>
  );
}

export default Menu;
