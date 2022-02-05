import "./App.css";
import Menu from "./components/Menu";

function App() {
  let menu = [
    {
      id: 1,
      name: "Baked Salmon",
      ingredients: [
        "Salmon",
        "Pine Nuts",
        "Butter",
        "Yellow Squash",
        "Olive Oil",
        "Garlic",
      ],
      steps: [
        "Preheat the oven to 350 degress",
        "Spread the olive oil",
        "Add the salmon, garlic and pine nuts",
        "Bake for 15 min",
        "Add the yellow squash",
        "Remove from oven",
      ],
    },
    {
      id: 2,
      name: "Fish Tacos",
      ingredients: ["Whitefish", "Cheese", "Lettuce", "Tomatoes", "Tortillas"],
      steps: [
        "Cook the fish on the grill until hot",
        "Place the fish on the 3 tortillas",
        "Top them with lettuce, tomatoes, and cheese",
      ],
    },
  ];
  let title = "Delicious Recipes";
  return (
    <div>
      <Menu title={title} menu={menu} />
    </div>
  );
}

export default App;
