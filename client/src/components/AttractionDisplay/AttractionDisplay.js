import React from "react";
import "./attractionDisplay.css";
import axios from "axios";

const AttractionDisplay = ({ selectedCountry, selectedLanguage, setAttractions, attractions, dataArr }) => {
  const getAttractionData = async () => {
    const { data } = await axios.post(`hackaton.com/${selectedLanguage}/${selectedCountry}`);
    setAttractions(data);
  };
  // const setAttractionsDisplay = () => {
  //   const attractionsDisplay = attractions.map((attraction, key) => {
  //     return (
  //       <div className="attraction" key={key}>
  //         <h2>
  //           {attraction.country}: {attraction.attracionName}
  //         </h2>
  //         <img src={attraction.imageUrl} alt="attractionsOfCountry.attracionName" />
  //         <p>{attraction.description}</p>
  //       </div>
  //     );
  //   });
  //   return attractionsDisplay;
  // };
  const setAttractionsDisplay = () => {
    return (
      <React.Fragment>
        <img src={dataArr[0].imageUrl} alt="attractionsOfCountry.attracionName" />
        <div className="text">
          <h2>
            {dataArr[0].country}: {dataArr[0].attracionName}
          </h2>

          <p>{dataArr[0].description}</p>
        </div>
      </React.Fragment>
    );
  };

  return <div className="attraction-cards">{setAttractionsDisplay()}</div>;
};
export default AttractionDisplay;
