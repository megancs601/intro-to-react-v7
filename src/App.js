import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Lillian",
      animal: "Cat",
      breed: "Tortie",
    }),
    React.createElement(Pet, {
      name: "Quirgie",
      animal: "Dog",
      breed: "Corgi",
    }),
    React.createElement(Pet, {
      name: "Doffu",
      animal: "Deer",
      breed: "Tuan",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
