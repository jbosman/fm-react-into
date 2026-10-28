import { createRoot } from "react-dom/client";

import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Ginos</h1>
      <Pizza name="Pepperoni Pizza" description="Yummy pepperoni pizza." />
      <Pizza name="Americano Pizza" description="French fries and hot dogs" />
      <Pizza name="Hawaiian" description="pineapple and ham" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
