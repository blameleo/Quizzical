import { useEffect, useState } from "react";
import Home from "./components/Home";
import axios from "axios";
import QuestionPage from "./components/QuestionPage";

function App() {
  const [start, setStart] = useState(false);
  const [questions, setQuestions] = useState([]);

  const getQuestions = async () => {
    const response = await axios.get(
      "http://opentdb.com/api.php?amount=3&difficulty=easy&type=multiple"
    );
    const data = response.data.results;
    setQuestions(data);
  };

  const startQuiz = () => {
    setStart(true);
    getQuestions();
  };

  return (
    <div className="">
      {start && questions ? (
        <QuestionPage data={questions} />
      ) : (
        <Home start={startQuiz} data={questions} />
      )}
    </div>
  );
}

export default App;
