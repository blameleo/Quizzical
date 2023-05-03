import { useEffect, useState } from "react";
import Home from "./components/Home";
import axios from 'axios'

function App() {

  const[questions, setQuestions] = useState([])

 
    const getQuestions = async () =>{
      const response = await axios.get("http://opentdb.com/api.php?amount=3&difficulty=easy&type=multiple")
      const data = response.data.results;
      setQuestions(data)
    }




  return (
    <div className="">
      <Home loadquestions={getQuestions} data={questions}/>
    </div>
  );
}

export default App;
