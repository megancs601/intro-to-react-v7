import { Component, useContext } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {
  //cant use hooks  with class components

  state = { loading: true, showModal: false };

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

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  //class components must have a render function
  render() {
    if (this.state.loading) {
      return <h2>loading ...</h2>;
    }

    //throw new Error("Crash Test");

    //destructuring
    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;

    return (
      <div className="details">
        <Carousel images={images}></Carousel>
        <div>
          {/* you can use this.state.name as well*/}
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city}, {state}
          </h2>
          <button
            onClick={this.toggleModal}
            style={{ backgroundColor: this.props.theme }}
          >
            Adopt {name}
          </button>
          <p> {description}</p>
          {showModal ? (
            <Modal>
              <h1>Would you like to adopt {name}?</h1>
              <div className="buttons">
                <a href="https://bit.ly/pet-adopt">Yes</a>
                <button onClick={this.toggleModal}>No</button>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

const WrappedDetails = () => {
  const params = useParams();
  const [theme] = useContext(ThemeContext);
  return (
    //ErrorBoundary needs to "live" above where you expect the error to be.
    <ErrorBoundary>
      <Details theme={theme} params={params} />
    </ErrorBoundary>
  );
};

export default WrappedDetails;
