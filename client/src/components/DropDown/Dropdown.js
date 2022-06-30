import React from "react";
import Select from "react-select";
import "./dropdown.css";

// import { useData } from "../../context/Context";

const Dropdown = ({
  dataLng,
  setSelected,
  selectType,
  setSelectedCountry,
  isCountrySelected,
}) => {
  // const { language } = useData();
  const insertOptions = () => {
    const options = [];
    if (selectType === "country") {
      const countriesRawData = dataLng.map((obj) => obj.country);
      const countries = [...new Set(countriesRawData)].sort(); //without duplicates
      countries.forEach((country) => {
        const obj = { value: `${country}`, label: `${country}` };
        options.push(obj);
      });
    } else if (selectType === "language") {
      const languages = ["English", "Hebrew", "Arabic", "Russian"];
      const languagesCodes = ["en", "he", "ar", "ru"];
      languages.forEach((language, idx) => {
        const obj = { value: `${languagesCodes[idx]}`, label: `${language}` };
        options.push(obj);
      });
    }
    return options;
  };

  const onHandleChange = (value) => {
    setSelected(value.value);
    if (isCountrySelected === "isCountrySelected") {
      setSelectedCountry("");
    }
  };
  return (
    <div className="select">
      <Select
        options={insertOptions()}
        onChange={onHandleChange}
        placeholder={`select ${selectType}`}
      />
    </div>
  );
};

export default Dropdown;
