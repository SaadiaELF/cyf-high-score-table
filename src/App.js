import React, { useState } from "react";
import Card from "./Components/Card";
import allCountryScores from "./scores";
import "./App.css";

function App() {
  const sortedCountries = allCountryScores.sort((a, b) => {
    let countryA = a.name.toLowerCase();
    let countryB = b.name.toLowerCase();
    return countryA < countryB ? -1 : countryA > countryB ? 1 : 0;
  });
  const [countries, setCountries] = useState(sortedCountries);
  const [order, setOrder] = useState(true);

  function orderScores() {
    if (order) {
      countries.map((country) => country.scores.sort((a, b) => b.s - a.s));
      setCountries(countries);
      setOrder(false);
    } else {
      countries.map((country) => country.scores.sort((a, b) => a.s - b.s));
      setCountries(countries);
      setOrder(true);
    }
  }
  return (
    <div className="container">
      <h1 className="heading"> High Score by Country</h1>
      <button className="btn btn--primary" onClick={orderScores}>
        {order ? "Descending" : "Ascending"} Order
      </button>
      {countries.map((country, index) => (
        <Card key={index} country={country.name} scores={country.scores} />
      ))}
    </div>
  );
}

export default App;
