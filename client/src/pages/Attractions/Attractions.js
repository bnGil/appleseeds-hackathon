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
  const [selectedLanguage, setSelectedLanguage] = useState(
    language.toLowerCase()
  );
  const [attractions, setAttractions] = useState([]);
  // const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    // setSpinner(true);
    const getData = async () => {
      try {
        const { data } = await API.get(`/${language.toLowerCase()}`);
        setDataLng(data);
      } catch (err) {
        console.log(err);
      }

      // setSpinner(false);
    };
    getData();
  }, [language]);

  return (
    <div className="attractions-container">
      <div className="dropdown-container">
        {/* <Dropdown
          setSelected={setSelectedLanguage}
          selectType={"language"}
          setSelectedCountry={setSelectedCountry}
          isCountrySelected={"isCountrySelected"}
        /> */}

        <Dropdown
          dataLng={dataLng}
          setSelected={setSelectedCountry}
          selectType={"country"}
          selectedLanguage={language.toLowerCase()}
          selectedCountry={selectedCountry}
        />
      </div>

      {selectedCountry && "en" && (
        <AttractionDisplay
          selectedCountry={selectedCountry}
          selectedLanguage={language.toLowerCase()}
          dataLng={dataLng}
          setAttractions={setAttractions}
          attractions={attractions}
        />
      )}
    </div>
  );
};

export default Attractions;
