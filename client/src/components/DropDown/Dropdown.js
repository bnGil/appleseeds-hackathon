import React from "react";
import Select from "react-select";
import "./dropdown.css";

const Dropdown = ({ data, setSelected, selectType, setSelectedLanguage }) => {
  const insertOptions = () => {
    const options = [];
    if (selectType === "countries") {
      const countriesRawData = data.map((obj) => obj.country);
      const countries = [...new Set(countriesRawData)]; //without duplicates
      countries.forEach((country) => {
        const obj = { value: `${country}`, label: `${country}` };
        options.push(obj);
      });
    } else if (selectType === "languages") {
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
    if (selectType === "countries") {
      setSelectedLanguage("");
    }
  };
  return (
    <div className="select">
      <Select options={insertOptions()} onChange={onHandleChange} placeholder="Select..." />
    </div>
  );
};

export default Dropdown;
