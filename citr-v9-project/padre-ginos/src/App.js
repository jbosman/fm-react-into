const Pizza = (props) => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, props.name),
            React.createElement("p", {}, props.description),
        ]
    )
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Padre Gino's"),
            React.createElement(Pizza, { name: "Pepperoni", description: "yummy"}),
            React.createElement(Pizza, { name: "Cheese", description: "yummy2"}),
        ]
    )
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));