import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "../../components/DropDown/Dropdown";
import QuizDisplay from "../../components/QuizDisplay/QuizDisplay";
import "./quiz.css";

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

const Quiz = () => {
  const [dataLng, setDataLng] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    setSpinner(true);
    // if (selectedLanguage) {
    //   try {
    //     const getData = async () => {
    //       const { data } = await axios.get(`balbla/${selectedLanguage}`);
    //       setDataLng(data);
    //       setSpinner(false);
    //     };
    //     getData();
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
    setDataLng(attractionsOfCountry);
  }, []); //i dont want it to change anytime i choose different lang ?
  console.log(selectedLanguage);
  return (
    <div className="Quiz">
      <Dropdown setSelected={setSelectedLanguage} selectType={"language"} />
      {selectedLanguage && <QuizDisplay />}
    </div>
  );
};

export default Quiz;
