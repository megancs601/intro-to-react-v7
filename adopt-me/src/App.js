const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Lillian"),
        React.createElement("h2", {}, "Cat"),
        React.createElement("h2", {}, "Tortie"),
    ])
}

const App = () => {
    return React.createElement(
      "div",
      {},
      [
        React.createElement("h1", {id: "brand"}, "Adopt Me!"),
        React.createElement(Pet),
        React.createElement(Pet),
        React.createElement(Pet)
    ]
    )
  };

ReactDOM.render(React.createElement(App), document.getElementById("root"));