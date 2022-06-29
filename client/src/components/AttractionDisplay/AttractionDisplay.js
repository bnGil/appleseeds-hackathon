import React from "react";
import "./attractionDisplay.css";

const AttractionDisplay = ({ /*   selectedCountry, selectedLanguage, */ data }) => {
  const getAttractionData = () => {
    //get data translated by api request with parametes ${selectedCountry}/${selectedLanguage}
    //I'll get one object (or an array with more than 1?)
    //for now let's pretend the data is attractionsOfCountry[0]
    //* attractionsOfCountry.filter((attraction)=>attraction.country === selectedCountry) //I dont think I need it if I get an array of objects from same country
    return (
      <React.Fragment>
        <h2>
          {data[0].country}: {data[0].attracionName}
        </h2>
        <img src={data[0].imageUrl} alt="attractionsOfCountry.attracionName" />
        <p>{data[0].description}</p>
      </React.Fragment>
    );
  };
  return <div className="attraction-card">{getAttractionData()}</div>;
};
export default AttractionDisplay;
