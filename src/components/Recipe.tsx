import Ingredients from "./Ingredients";
import Steps from "./Steps";

function Recipe({
  recipeName,
  ingredients,
  steps,
}: {
  recipeName: string;
  ingredients: Array<string>;
  steps: Array<string>;
}) {
  return (
    <div>
      <h3> {recipeName}</h3>
      {ingredients.map((item: any) => (
        <ul key={item.name}>{<Ingredients item={item.name} />}</ul>
      ))}
      <h2>Cooking Instructions</h2>
      {steps.map((step: string) => (
        <Steps step={step} key={step} />
      ))}
      <hr />
    </div>
  );
}

export default Recipe;
