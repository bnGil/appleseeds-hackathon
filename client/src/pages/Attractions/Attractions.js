import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "../../components/DropDown/Dropdown";
import AttractionDisplay from "../../components/AttractionDisplay/AttractionDisplay";
import "./attractions.css";

const Attractions = () => {
  //data from API
  const [dataLng, setDataLng] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [attractions, setAttractions] = useState([]);
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    setSpinner(true);

    if (selectedLanguage) {
      console.log(selectedLanguage);
      const getData = async () => {
        //!change to ${selectedLanguage}
        try {
          const { data } = await axios.get(
            `http://localhost:5050/attractions/${selectedLanguage}`
          );
          setDataLng(data);
          setSpinner(false);
        } catch (err) {
          console.log(err);
        }
      };
      getData();
    }
  }, [selectedLanguage]);

  return (
    <div className="attractions-container">
      <div className="dropdown-container">
        <Dropdown
          setSelected={setSelectedLanguage}
          selectType={"language"}
          setSelectedCountry={setSelectedCountry}
          isCountrySelected={"isCountrySelected"}
        />

        <Dropdown
          dataLng={dataLng}
          setSelected={setSelectedCountry}
          selectType={"country"}
          selectedLanguage={selectedLanguage}
          selectedCountry={selectedCountry}
        />
      </div>

      {selectedCountry && selectedLanguage && (
        <AttractionDisplay
          selectedCountry={selectedCountry}
          selectedLanguage={selectedLanguage}
          dataLng={dataLng}
          setAttractions={setAttractions}
          attractions={attractions}
          setSpinner={setSpinner}
        />
      )}
    </div>
  );
};

export default Attractions;
