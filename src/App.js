import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Lillian" animal="Cat" breed="Tortie"></Pet>
      <Pet name="Quirgie" animal="Dog" breed="Corgi"></Pet>
      <Pet name="Doffu" animal="Deer" breed="Tuan"></Pet>
    </div>
  );
};

render(<App />, document.getElementById("root"));
