export default function Location(props) {
  return (
    <label htmlFor="location">
      Location
      <input
        id="location"
        value={props.location}
        placeholder="Location"
        onChange={props.setLocation}
      />
    </label>
  );
}
