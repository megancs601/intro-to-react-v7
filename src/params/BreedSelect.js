import { useState } from "react";
import useBreedList from "../useBreedList";

export default function BreedSelect(props) {
  const [breeds] = useBreedList(props.animal);
  return (
    <label htmlFor="breed">
      Breed
      <select
        id="breed"
        value={props.breed}
        onChange={props.selectBreed}
        onBlur={props.selectBreed}
      >
        <option disabled value="">
          -- select an option --
        </option>
        {breeds.map((allBreeds) => (
          <option key={allBreeds} value={allBreeds}>
            {allBreeds}
          </option>
        ))}
      </select>
    </label>
  );
}
