import React from "react";
import Question from "./Question";

function QuestionPage({ data }) {
  return (
    <div className=" w-5/6 mx-auto flex flex-col items-center">
      {data.map((item, index) => {
        return <Question key={index} data={item} />;
      })}

      <button className="bg-blue-600 p-2 text-white w-1/6 ">
        check answer
      </button>
    </div>
  );
}

export default QuestionPage;
