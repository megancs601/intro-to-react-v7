export default function AnimalSelect(props) {
  const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
  return (
    <label htmlFor="animal">
      Animal
      <select
        id="animal"
        value={props.animal}
        onChange={props.selectAnimal}
        onBlur={props.selectAnimal}
      >
        <option disabled value="">
          -- select an option --
        </option>
        {ANIMALS.map((animal) => (
          <option key={animal} value={animal}>
            {animal}
          </option>
        ))}
      </select>
    </label>
  );
}
