import React, { useState, useEffect } from "react";
import "../QuizDisplay/quizDisplay.css";

const QuizDisplay = ({ dataLng }) => {
  const [attractionsByLanguage, setAttractionsByLanguage] = useState(dataLng);
  const [currentAttraction, setCurrentAttraction] = useState({});
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [allAnswers, setAllAnswers] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const getRandomIndex = (array) => {
    const index = Math.floor(Math.random() * array.length);
    return index;
  };

  //add  to useeffect anytime when currentAttraction changed
  // const getRandomAttraction = () => {
  //   const index = Math.floor(Math.random() * attractionsByLanguage.length);
  //   setCurrentAttraction(attractionsByLanguage[index]);
  //   const newArr = [...attractionsByLanguage];
  //   newArr.splice(index, 1); //removing so there wont be duplicates
  //   setAttractionsByLanguage(newArr);
  // };

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  // const setAnswers = () => {
  //   const answers = [currentAttraction.country];
  //   let i = 0;
  //   while (i < 3) {
  //     const answer = attractionsByLanguage[getRandomIndex()];
  //     if (answers.includes(answer)) {
  //       continue;
  //     } else {
  //       answers.push(answer);
  //       i++;
  //     }
  //   }

  //   setAllAnswers(shuffle(answers));
  // };
  // console.log(currentAttraction);

  useEffect(() => {
    setIsClicked(false);
    const index = Math.floor(Math.random() * attractionsByLanguage.length);
    setCurrentAttraction(attractionsByLanguage[index]);
    const newArr = [...attractionsByLanguage];

    newArr.splice(index, 1); //removing so there wont be duplicates

    setAttractionsByLanguage(newArr);
    console.log("newArr length", newArr);
    console.log("attractionsByLanguage", attractionsByLanguage);
    // setAnswers();
    // getRandomAttraction();
    // setSpinner(true);
    // setAnswers();
    const answers = [currentAttraction.attractionName];
    console.log(answers);
    for (let i = 0; i < 3; i++) {
      const index2 = Math.floor(Math.random() * newArr.length);
      console.log("index2", index2);
      const answer = attractionsByLanguage[index2];
      answers.push(answer.attractionName);
    }
    // let i = 0;
    // while (i < 3) {
    //   const answer = attractionsByLanguage[Math.floor(Math.random() * attractionsByLanguage.length)];
    //   console.log("answer", answer);
    //   if (answers.includes(answer.country)) {
    //     continue;
    //   } else {
    //     answers.push(answer.country);
    //     i++;
    //   }
    // }
    console.log(answers);
    setAllAnswers(shuffle(answers));
  }, []);
  console.log("allAnswers", allAnswers);
  console.log("attractionsByLanguage", attractionsByLanguage);
  const insertQuiz = () => {
    const getButtons = () => {
      return allAnswers.map((answer, key) => {
        return (
          <div key={key}>
            <button>{answer}</button>
          </div>
        );
      });
    };
    return (
      <React.Fragment>
        <img src={currentAttraction.imageUrl} />
        {getButtons()}
      </React.Fragment>
    );
  };
  return <div className="quiz-container">{Object.keys(currentAttraction).length !== 0 && insertQuiz()}</div>;
};

export default QuizDisplay;
