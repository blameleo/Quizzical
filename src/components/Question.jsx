import React, { useState } from "react";

function Question({ data }) {
  // const [answers,setAnswers] = useState([])
  const entities = {
    "&#039;": "'",
    "&quot;": '"',
  };

  // setAnswers([])

const getVal = (e)=>{
alert(e)
}

  const answers = [...data.incorrect_answers, data.correct_answer];
  const shuffledAnswers = answers.sort(() => Math.random() - 0.5);
  console.log(answers);
  console.log(shuffledAnswers);

  const ques = data.question.replace(/&#?\w+;/, (match) => entities[match]);
  return (
    <div className=" text-center py-4">
      <h1>{ques}</h1>
      <div className="flex justify-around  py-2">
        {shuffledAnswers.map((item) => (
          <p onClick={()=> getVal(item)} className="cursor-pointer border border-black p-1">{item}</p>
        ))}

        {/* <p className='border border-black p-1'>answer</p>
            <p className='border border-black p-1'>answer</p>
            <p className='border border-black p-1'>answer</p> */}
      </div>
    </div>
  );
}

export default Question;
