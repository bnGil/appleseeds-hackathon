import React, { useState, useEffect } from "react";
import "../QuizDisplay/quizDisplay.css";

const QuizDisplay = ({ dataLng }) => {
  const [attractionsByLanguage, setAttractionsByLanguage] = useState(dataLng);
  const [currentAttraction, setCurrentAttraction] = useState({});
  const [counterCorrect, setCounterCorrect] = useState(0);
  const [counterWrong, setCounterWrong] = useState(0);
  const [allAnswers, setAllAnswers] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

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

    const answers = [tempAttraction.attractionName];
    for (let i = 0; i < 3; i++) {
      const index2 = Math.floor(Math.random() * newArr.length);
      console.log("index2", index2);
      const answer = attractionsByLanguage[index2];
      answers.push(answer.attractionName);
    }
    setAllAnswers(shuffle(answers));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClicked]);

  const onHandleClick = (e) => {
    setIsDisabled(true);
    if (e.target.value === currentAttraction.attractionName) {
      setIsCorrect(true);
      setTimeout(() => {
        setIsCorrect(false);
        setIsClicked((prev) => !prev);
        setIsDisabled(false);
      }, 1000);
      setCounterCorrect((prev) => prev + 1);
    } else {
      setIsWrong(true);
      setTimeout(() => {
        setIsWrong(false);
        setIsClicked((prev) => !prev);
        setIsDisabled(false);
      }, 1000);
      setCounterWrong((prev) => prev + 1);
    }
    if (counterCorrect + counterWrong === 20) {
      setMessage(`You guessed ${counterCorrect} places out of 20.`);
    }
  };
  console.log(counterCorrect, counterWrong);
  const insertQuiz = () => {
    const getButtons = () => {
      return allAnswers.map((answer, key) => {
        return (
          <div key={key}>
            <button value={answer} onClick={onHandleClick} disabled={isDisabled}>
              {answer}
            </button>
          </div>
        );
      });
    };
    return (
      <React.Fragment>
        <img src={currentAttraction.imageUrl} alt="attraction" />
        {isCorrect && <p style={{ color: "green", fontWeight: "bold" }}>Correct answer! </p>}
        {isWrong && <p style={{ color: "red", fontWeight: "bold" }}>{`Wrong answer :(`} </p>}
        <div className="buttons">{getButtons()}</div>
      </React.Fragment>
    );
  };

  return (
    <div className="quiz-container">
      {Object.keys(currentAttraction).length !== 0 && !message && insertQuiz()}
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default QuizDisplay;
