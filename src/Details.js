import { Component } from "react";
import { useParams } from "react-router-dom";

class Details extends Component {
  //cant use hooks  with class components

  constructor(props) {
    super(props);

    this.state = { loading: true };
  }

  //class components must have a render function
  render() {
    if (this.state.loading) {
      return <h2>loading ...</h2>;
    }

    //destructuring
    const { animal, breed, city, state, description, name } = this.state;

    return (
      <div className="details">
        <div>
          {/* you can use this.state.name as well*/}
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city}, {state}
          </h2>
          <button>Adopt {name}</button>
          <p> {description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
