import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "../../components/DropDown/Dropdown";
import AttractionDisplay from "../../components/AttractionDisplay/AttractionDisplay";
import "./attractions.css";

//temporary fake data
const attractionsOfCountry = [
  {
    id: 11,
    country: "China",
    attracionName: "bla bla",
    imageUrl: "https://www.roadaffair.com/wp-content/uploads/2017/12/forbidden-city-china-shutterstock_297209894.jpg",
    description:
      "description description description description description description description description description description description description description description description description description description description description ",
  },
  {
    id: 12,
    country: "spain",
    attracionName: "bla bla 2",
    imageUrl:
      "https://www.roadaffair.com/wp-content/uploads/2017/09/park-guell-barcelona-spain-shutterstock_261614468.jpg",
  },
  {
    id: 13,
    country: "China",
    attracionName: "bla bla 3",
    imageUrl:
      "https://www.roadaffair.com/wp-content/uploads/2017/12/leshan-giant-buddha-china-shutterstock_197940701.jpg",
  },
  {
    id: 14,
    country: "Germany",
    attracionName: "bla bla 4",
    imageUrl:
      "https://www.roadaffair.com/wp-content/uploads/2017/10/neuschwanstein-castle-germany-shutterstock_620565122.jpg",
  },
];

// const countries = ["china", "iraq", "indonesia"];

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
      try {
        const getData = async () => {
          //!change to ${selectedLanguage}
          const { data } = await axios.get(`http://localhost:5000/attractions/eng`);
          setDataLng(data);
          setSpinner(false);
        };
        getData();
      } catch (err) {
        console.log(err);
      }
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
