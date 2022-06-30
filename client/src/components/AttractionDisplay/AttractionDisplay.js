import React, { useEffect } from "react";
import "./attractionDisplay.css";
import API from "../../api/API.js";

const AttractionDisplay = ({
  selectedCountry,
  selectedLanguage,
  setAttractions,
  attractions,
}) => {
  useEffect(() => {
    if (selectedLanguage && selectedCountry) {
      const getAttractionData = async () => {
        try {
          const { data } = await API.get(
            `/${selectedLanguage}/${selectedCountry}`
          );
          setAttractions(data);
        } catch (err) {
          console.log(err);
        }
      };
      getAttractionData();
    }
  }, [selectedLanguage, selectedCountry, setAttractions]);
  // useEffect(() => {
  //   if (selectedLanguage && selectedCountry) {
  //     try {
  //       const getAttractionData = async () => {
  //         const { data } = await API.get(
  //           `/${selectedLanguage}/${selectedCountry}`
  //         );
  //         setAttractions(data);
  //       };
  //       getAttractionData();
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // }, [selectedLanguage, selectedCountry, setAttractions]);

  const setAttractionsDisplay = () => {
    const attractionsDisplay = attractions.map((attraction, key) => {
      return (
        <div className="attraction" key={key}>
          <div className="img-container">
            <img
              src={attraction.imageUrl}
              alt="attractionsOfCountry.attracionName"
            />
          </div>
          <div className="info">
            <h2>
              {attraction.country}: {attraction.attractionName}
            </h2>
            <p>{attraction.description}</p>
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
