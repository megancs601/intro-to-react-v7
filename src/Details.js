import { Component } from "react";
import { useParams } from "react-router-dom";

class Details extends Component {
  //cant use hooks  with class components

  state = { loading: true };

  //get called after Details gets rendered to the DOM
  //componentDidMount is essentially useEffect(()=> {}, [])
  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );

    const json = await res.json();

    //you can call setState for each of these, but its better to call setState once if possible
    //this.setState(Object.assign({ loading: false }, json.pets[0]));
    this.setState({ loading: false, ...json.pets[0] }); //spread operator
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

const WrappedDetails = () => {
  const params = useParams();
  return <Details params={params} />;
};

export default WrappedDetails;
