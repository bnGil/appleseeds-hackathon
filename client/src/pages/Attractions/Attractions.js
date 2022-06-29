import React, { useState, useEffect } from "react";
import Dropdown from "../../components/DropDown/Dropdown";
import AttractionDisplay from "../../components/AttractionDisplay/AttractionDisplay";
import "./attractions.css";

//temporary fake data
const attractionsOfCountry = [
  {
    id: 11,
    country: "China",
    attracionName: "bla bla",
    imageUrl: "https://www.roadaffair.com/wp-content/uploads/2017/12/angkor-wat-cambodia-shutterstock_167952836.jpg",
    description:
      "description description description deseiption desddon description description description description deeetion description description description desception deiption eiption description description descriptioeription ",
  },
  {
    id: 12,
    country: "China",
    attracionName: "bla bla 2",
    imageUrl: "img2.src",
  },
  {
    id: 13,
    country: "China",
    attracionName: "bla bla 3",
    imageUrl: "img3.src",
  },
  {
    id: 14,
    country: "Germany",
    attracionName: "bla bla 4",
    imageUrl: "img4.src",
  },
];

// const countries = ["china", "iraq", "indonesia"];

const Attractions = () => {
  //data from API
  const [dataArr, setDataArr] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [attractions, setAttractions] = useState([]);
  useEffect(() => {
    //get data from api
    //save it with setDataArr
    //call insertAttractions()
    setDataArr(attractionsOfCountry);
  }, []);
  // console.log(dataArr);
  console.log(selectedCountry);
  console.log(selectedLanguage);
  return (
    <div className="attractions-container">
      <div className="dropdown-container">
        <Dropdown setSelected={setSelectedLanguage} selectType={"language"} setSelectedCountry={setSelectedCountry} />

        <Dropdown
          data={dataArr}
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
          dataArr={dataArr}
          setAttractions={setAttractions}
          attractions={attractions}
        />
      )}
    </div>
  );
};

export default Attractions;
