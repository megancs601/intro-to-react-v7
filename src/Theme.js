import ThemeContext from "./ThemeContext";
import { useContext } from "react";

export default function Theme() {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <>
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
    </>
  );
}
