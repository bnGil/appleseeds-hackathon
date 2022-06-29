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

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    // setIsClicked(false);
    const index = Math.floor(Math.random() * attractionsByLanguage.length);
    const tempAttraction = attractionsByLanguage[index];
    setCurrentAttraction(tempAttraction);
    const newArr = [...attractionsByLanguage];

    newArr.splice(index, 1); //removing so there wont be duplicates

    setAttractionsByLanguage(newArr);
    console.log("newArr length", newArr);
    console.log("attractionsByLanguage", attractionsByLanguage);

    const answers = [tempAttraction.attractionName];
    console.log(answers);
    for (let i = 0; i < 3; i++) {
      const index2 = Math.floor(Math.random() * newArr.length);
      console.log("index2", index2);
      const answer = attractionsByLanguage[index2];
      answers.push(answer.attractionName);
    }

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
            <button value={answer}>{answer}</button>
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
