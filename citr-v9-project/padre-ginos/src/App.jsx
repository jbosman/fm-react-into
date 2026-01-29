import { createRoot } from "react-dom/client";

import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's</h1>
      <Pizza name="Pepporni" description="yummy" image={ "/public/pizzas/pepperoni.webp" }/>
      <Pizza name="Four Cheese" description="yummy2" image={ "/public/pizzas/four_cheese.webp" }/>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
