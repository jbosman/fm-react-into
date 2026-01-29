import React from "react";
import { createRoot } from "react-dom/client";

import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's</h1>
      <Pizza name="Pepporni" description="yummy" />
      <Pizza name="Cheese" description="yummy2" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
