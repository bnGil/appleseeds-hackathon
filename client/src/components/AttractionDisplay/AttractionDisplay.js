import React, { useEffect } from "react";
import "./attractionDisplay.css";
import API from "../../api/API.js";

const AttractionDisplay = ({ selectedCountry, selectedLanguage, setAttractions, attractions }) => {
  useEffect(() => {
    if (selectedLanguage && selectedCountry) {
      try {
        const getAttractionData = async () => {
          const { data } = await API.get(`/${selectedLanguage}/${selectedCountry}`);
          setAttractions(data);
        };
        getAttractionData();
      } catch (err) {
        console.log(err);
      }
    }
  }, [selectedLanguage, selectedCountry, setAttractions]);

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
