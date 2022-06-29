import axios from "axios";
import React from "react";
import Select from "react-select";
import "./dropdown.css";

const Dropdown = ({ data, setSelected, selectType, setSelectedCountry, selectedLanguage, selectedCountry }) => {
  const insertOptions = () => {
    const options = [];
    if (selectType === "country") {
      const countriesRawData = data.map((obj) => obj.country);
      const countries = [...new Set(countriesRawData)]; //without duplicates
      countries.forEach((country) => {
        const obj = { value: `${country}`, label: `${country}` };
        options.push(obj);
      });
    } else if (selectType === "language") {
      const languages = ["English", "Hebrew", "Arabic", "Russian"];
      languages.forEach((language) => {
        const obj = { value: `${language}`, label: `${language}` };
        options.push(obj);
      });
    }
    return options;
  };

  const onHandleChange = (value) => {
    setSelected(value.value);
    if (selectType === "language") {
      setSelectedCountry("");
    }

    // } else if (selectType === "country") {
    //   setSelected(value.value); //set country
    //   const { data } = await axios.post(`hackaton.com/${selectedLanguage}/${selectedCountry}`);
    //   selectedLanguage;
    // }
  };
  return (
    <div className="select">
      <Select options={insertOptions()} onChange={onHandleChange} placeholder={`select ${selectType}`} />
    </div>
  );
};

export default Dropdown;
