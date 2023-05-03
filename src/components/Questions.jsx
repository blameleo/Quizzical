import React, { useState } from "react";

export default function Questions({ quest }) {
  const el = quest.map((item) => {
    console.log(item);

    const [select, setSelect] = useState({});
    console.log(quest);
    function handleSelect() {
      setSelect((prev)=>{
        return {
            ...prev,
            selected: true
        }
      });
      console.log(select);
    }

   

    return (
      <div className=" border-b border-gray-300 mb-3">
        <h1 className="text-center text-xl">{item.question}</h1>
        <ul className="flex border border-black w-3/6 justify-around mx-auto py-5">
          {item.answers.map((answer) => {
            return (
              <li onClick={handleSelect} className="border cursor-pointer     border-black p-1 rounded">
                {answer}
              </li>
            );
          })}
        </ul>
      </div>
    );
  });
  return (
    <div className="bg-violet-100 h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl">questions</h1>
      <div className="border border-violet-900 rounded p-5">{el}</div>
    </div>
  );
}
