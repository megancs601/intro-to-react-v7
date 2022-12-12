import { useState, useEffect } from "react";
import Results from "./Results";
import PageNavigation from "./PageNavigation";
import BreedSelect from "./params/BreedSelect";
import AnimalSelect from "./params/AnimalSelect";
import Location from "./params/Location";
import Theme from "./Theme";

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);

  const [page, setPage] = useState(0);
  const [numberOfResults, setNumberOfResults] = useState(0);

  useEffect(() => {
    requestPets();
  }, [page]); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}&page=${page}`
    );
    const json = await res.json();

    setPets(json.pets);
    setNumberOfResults(json.numberOfResults);
  }

  const selectAnimal = (e) => {
    setAnimal(e.target.value);
    setBreed("");
  };

  const selectBreed = (e) => {
    setBreed(e.target.value);
  };

  const changeLocation = (e) => {
    setLocation(e.target.value);
  };

  const submitClicked = (e) => {
    e.preventDefault();
    requestPets();
    setPage(0);
  };

  return (
    <div className="search-params">
      <form onSubmit={submitClicked}>
        <Location location={location} setLocation={changeLocation} />
        <AnimalSelect selectAnimal={selectAnimal} animal={animal} />
        <BreedSelect animal={animal} selectBreed={selectBreed} breed={breed} />
        <Theme />
      </form>
      <PageNavigation setPage={setPage} numberOfResults={numberOfResults} />
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
