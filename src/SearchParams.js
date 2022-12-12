import { useState, useEffect, useContext } from "react";

import Results from "./Results";
import ThemeContext from "./ThemeContext";
import PageNavigation from "./PageNavigation";
import BreedSelect from "./params/BreedSelect";
import AnimalSelect from "./params/AnimalSelect";

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");

  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);
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

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
          setPage(0);
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalSelect selectAnimal={selectAnimal} animal={animal} />
        <BreedSelect animal={animal} selectBreed={selectBreed} breed={breed} />
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="mediumorchid">Medium Orchid</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <PageNavigation setPage={setPage} numberOfResults={numberOfResults} />
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
