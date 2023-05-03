import React from "react";

export default function Home({loadquestions}) {
  return <div className="h-screen flex justify-center items-center">
    <button onClick={loadquestions} className="bg-red-500 p-3 text-white font-bold">
        Start Quiz
    </button>
  </div>;
}
