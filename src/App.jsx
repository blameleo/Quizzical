import { useState, useEffect } from "react";

import "./App.css";
import Home from "./components/Home";
import Questions from "./components/Questions";
import { nanoid } from "nanoid";

function App() {
  const shuffleAnswers = (arr) => arr.sort(() => Math.random() - 0.5);

  const [question, setQuestion] = useState([]);
const [started,setStarted] = useState(false)

function startGame (){
  setStarted(true)
}

  useEffect(() => {
    let questions = [];
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => res.json())
      .then((data) => {
        data.results.map((item) => {
          questions.push({
            id: nanoid,
            answers: shuffleAnswers([
              ...item.incorrect_answers,
              item.correct_answer,
            ]),
            question: item.question,
            selected: null,
            checked: false,
          });
        });
      });
    setQuestion(questions);
  }, []);
  return (
    <div className="">
      {started ? <Questions  quest={question}/> :  <Home start={startGame} /> }
     
      
    </div>
  );
}

export default App;
