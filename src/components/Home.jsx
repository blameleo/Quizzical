import React from "react";

export default function Home({start}) {
  return (
    <div className="flex justify-center items-center h-screen bg-purple-200">
      <div className="flex flex-col">
        <h1 className="font-bold text-4xl text-purple-900">Quizzical</h1>
        <button onClick={()=> start()} className="bg-purple-800 text-purple-100 p-3 my-10 rounded font-bold hover:bg-purple-400">
          Start quiz
        </button>
      </div>
    </div>
  );
}
