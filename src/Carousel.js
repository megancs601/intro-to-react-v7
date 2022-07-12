import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static deafultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    //.index refers to data-index in the img tag
    // + makes the index an auctal number rather than a string
    this.setState({ active: +event.target.dataset.index });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal"></img>
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              // eslint-disable-next-line
              onClick={this.handleIndexClick}
              key={photo}
              src={photo}
              data-index={index}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            ></img>
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
