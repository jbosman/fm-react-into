import { createRoot } from "react-dom/client";

import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Ginos</h1>
      <Pizza name="Pepperoni" description="Yummy pepperoni pizza." image={"/public/pizzas/pepperoni.webp"} />
      <Pizza name="Americano" description="French fries and hot dogs" image={"/public/pizzas/big_meat.webp"} />
      <Pizza name="Hawaiian" description="pineapple and ham" image={"/public/pizzas/hawaiian.webp"} />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
