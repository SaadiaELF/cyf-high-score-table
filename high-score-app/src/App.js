import React from "react";
import Card from "./Components/Card";
import allCountryScores from "./scores";
import "./App.css";
const sortedValues = allCountryScores.sort();
console.log(sortedValues);
function App() {
  return (
    <div className="container">
      <h1 className="heading"> High Score by Country</h1>
      {sortedValues.map((country, index) => (
        <Card key={index} country={country.name} scores={country.scores} />
      ))}
    </div>
  );
}

export default App;
