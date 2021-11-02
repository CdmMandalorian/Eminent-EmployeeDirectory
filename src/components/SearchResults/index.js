import React from "react";
import "./style.css";
import Card from "../Card";


function SearchResults(props) {
  return (
    <div>
      {props.result.map(result => (
        <Card
        firstName = {result.name.first}
        lastName = {result.name.last}
        id={result.id.value}
        image= {result.picture.thumbnail}
        contactNumber= {result.phone}
        email={result.email}
        dob={result.dob.date}
        />
      ))}
    </div>
  );
}

export default SearchResults;
