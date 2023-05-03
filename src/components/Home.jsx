import React from "react";

export default function Home({start}) {
  return <div className="h-screen flex justify-center items-center">
    <button onClick={start} className="bg-red-500 p-3 text-white font-bold">
        Start Quiz
    </button>
  </div>;
}
