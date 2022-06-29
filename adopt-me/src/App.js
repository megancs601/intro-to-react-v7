const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ])
}

const App = () => {
    return React.createElement(
      "div",
      {},
      [
        React.createElement("h1", {id: "brand"}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Lillian",
            animal: "Cat",
            breed: "Tortie"
        }),
        React.createElement(Pet, {
            name: "Quirgie",
            animal: "Dog",
            breed: "Corgi"
        }),
        React.createElement(Pet, {
            name: "Doffu",
            animal: "Deer",
            breed: "Tuan"
        })
    ]
    )
  };

ReactDOM.render(React.createElement(App), document.getElementById("root"));