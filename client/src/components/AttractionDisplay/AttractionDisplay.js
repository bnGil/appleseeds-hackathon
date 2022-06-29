import React, { useEffect } from "react";
import "./attractionDisplay.css";
import axios from "axios";

const AttractionDisplay = ({
  selectedCountry,
  selectedLanguage,
  setAttractions,
  attractions,
  dataLng,
  setSpinner,
}) => {
  useEffect(() => {
    setSpinner(true);

    if (selectedLanguage && selectedCountry) {
      try {
        const getAttractionData = async () => {
          const { data } = await axios.get(
            `http://localhost:5050/attractions/${selectedLanguage}/${selectedCountry}`
          );
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
          <div className="info">
            <h2>
              {attraction.country}: {attraction.attractionName}
            </h2>
            <p>{attraction.description}</p>
          </div>
          <div className="img-container">
            <img
              src={attraction.imageUrl}
              alt="attractionsOfCountry.attracionName"
            />
          </div>
        </div>
      );
    });
    return attractionsDisplay;
  };

  return (
    <div className="AttractionDisplay">
      <div className="attraction-cards">{setAttractionsDisplay()}</div>
    </div>
  );
};
export default AttractionDisplay;
