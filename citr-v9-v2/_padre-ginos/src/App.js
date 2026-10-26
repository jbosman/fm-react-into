const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Ginos"),
    React.createElement(Pizza, {
      name: "Pepperoni Pizza",
      description: "Yummy pepperoni pizza.",
    }),
    React.createElement(Pizza, {
      name: "Americano Pizza",
      description: "French fries and hot dogs",
    }),
    React.createElement(Pizza, {
      name: "Hawaiian",
      description: "pineapple and ham",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
