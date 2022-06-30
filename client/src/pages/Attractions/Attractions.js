import React, { useState, useEffect } from "react";
import Dropdown from "../../components/DropDown/Dropdown";
import AttractionDisplay from "../../components/AttractionDisplay/AttractionDisplay";
import "./attractions.css";
import API from "../../api/API.js";
import { useData } from "../../context/Context";

const Attractions = () => {
  const { language } = useData();
  const [dataLng, setDataLng] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [attractions, setAttractions] = useState([]);
  // const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    // setSpinner(true);
    setSelectedLanguage(language.toLowerCase());
    console.log(selectedLanguage);
    if (selectedLanguage) {
      try {
        const getData = async () => {
          const { data } = await API.get(`/${selectedLanguage}`);
          setDataLng(data);
          // setSpinner(false);
        };
        getData();
      } catch (err) {
        console.log(err);
      }
    }
  }, [selectedLanguage, language]);

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

      {selectedCountry && "en" && (
        <AttractionDisplay
          selectedCountry={selectedCountry}
          selectedLanguage={selectedLanguage}
          dataLng={dataLng}
          setAttractions={setAttractions}
          attractions={attractions}
        />
      )}
    </div>
  );
};

export default Attractions;
