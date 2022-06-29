import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "../../components/DropDown/Dropdown";
import QuizDisplay from "../../components/QuizDisplay/QuizDisplay";
import "./quiz.css";

const Quiz = () => {
  const [dataLng, setDataLng] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    if (selectedLanguage) {
      setSpinner(true);
      try {
        const getData = async () => {
          //! ${selectedLanguage}
          const { data } = await axios.get(`http://localhost:5000/attractions/eng`);
          setDataLng(data);

          setSpinner(false);
        };
        getData();
      } catch (err) {
        console.log(err);
      }
    }
  }, [selectedLanguage]); //i dont want it to change anytime i choose different lang ?

  return (
    <div className="quiz">
      <Dropdown setSelected={setSelectedLanguage} selectType={"language"} />
      {dataLng.length > 0 && <QuizDisplay dataLng={dataLng} />}
    </div>
  );
};

export default Quiz;
