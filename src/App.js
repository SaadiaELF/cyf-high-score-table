import React from "react";
import Card from "./Components/Card";
import allCountryScores from "./scores";
import "./App.css";

const sortedCountries = allCountryScores.sort((a, b) => {
  let countryA = a.name.toLowerCase();
  let countryB = b.name.toLowerCase();

  if (countryA < countryB) {
    return -1;
  }
  if (countryA > countryB) {
    return 1;
  }
  return 0;
});

function App() {
  return (
    <div className="container">
      <h1 className="heading"> High Score by Country</h1>
      <button className="btn btn--primary">Order Asc/Desc</button>
      {sortedCountries.map((country, index) => (
        <Card key={index} country={country.name} scores={country.scores} />
      ))}
    </div>
  );
}

export default App;
