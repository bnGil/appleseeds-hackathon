import React, { useState, useEffect } from "react";
import Dropdown from "../../components/DropDown/Dropdown";
import QuizDisplay from "../../components/QuizDisplay/QuizDisplay";
import "./quiz.css";
import API from "../../api/API.js";

const Quiz = () => {
  const [dataLng, setDataLng] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  useEffect(() => {
    if (selectedLanguage) {
      try {
        const getData = async () => {
          const { data } = await API.get(`/${selectedLanguage}`);
          setDataLng(data);
        };
        getData();
      } catch (err) {
        console.log(err);
      }
    }
  }, [selectedLanguage]); //i dont want it to change anytime i choose different lang ?

  return (
    <div className="quiz">
      <div className="top">
        <a href="https://tripexplorer.herokuapp.com/quiz">
          <button>Reset</button>
        </a>
        <Dropdown setSelected={setSelectedLanguage} selectType={"language"} />
      </div>
      {dataLng.length > 0 && <QuizDisplay dataLng={dataLng} />}
    </div>
  );
};

export default Quiz;
