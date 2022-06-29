import React, { useState, useEffect } from "react";
import "./attractionDisplay.css";
import axios from "axios";

const AttractionDisplay = ({ selectedCountry, selectedLanguage, setAttractions, attractions, dataLng, setSpinner }) => {
  useEffect(() => {
    setSpinner(true);

    if (selectedLanguage && selectedCountry) {
      try {
        const getAttractionData = async () => {
          //!change to ${selectedLanguage}
          const { data } = await axios.get(`http://localhost:5000/attractions/eng/${selectedCountry}`);
          setAttractions(data);
          setSpinner(false);
        };
        getAttractionData();
      } catch (err) {
        console.log(err);
      }
    }
  }, [selectedLanguage, selectedCountry]);

  const setAttractionsDisplay = () => {
    const attractionsDisplay = attractions.map((attraction, key) => {
      return (
        <div className="attraction" key={key}>
          <h2>
            {attraction.country}: {attraction.attracionName}
          </h2>
          <img src={attraction.imageUrl} alt="attractionsOfCountry.attracionName" />
          <p>{attraction.description}</p>
        </div>
      );
    });
    return attractionsDisplay;
  };

  return <div className="attraction-cards">{setAttractionsDisplay()}</div>;
};
export default AttractionDisplay;
