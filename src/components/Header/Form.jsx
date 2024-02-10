import { useState } from "react";
import reactIMg from "../../assets/react-core-concepts.png";
import "./Header.css";

export default function Header(props) {
  const [city, setCity] = useState("");

  function handleOnChange(e) {
    setCity(e.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    props.onGetCity(city);
  }

  return (
    <header>
      <h1>Weather Searcher</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Enter a City"
          onChange={handleOnChange}
        />
      </form>
    </header>
  );
}
