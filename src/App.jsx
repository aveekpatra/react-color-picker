import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("#A78BFA");

  return (
    <>
      <div
        className="w-full h-screen duration-200 flex justify-center items-center"
        style={{ backgroundColor: color }}
      >
        <div
          id="top-bar"
          className="flex bg-white rounded-md gap-3 shadow-md mx-auto text-4xl font-bold p-5"
        >
          Color: {color}
        </div>
        <div
          id="bottom-bar"
          className="flex fixed bottom-5 bg-white rounded-md p-2 gap-3 shadow-md mx-auto"
        >
          <div
            className="p-3 bg-emerald-400 rounded-md shadow w-24 text-center hover:w-28 duration-200 cursor-pointer"
            onClick={() => {
              setColor("#34D399");
            }}
          >
            Emerald
          </div>
          <div
            className="p-3 bg-sky-400 rounded-md shadow w-24 text-center hover:w-28 duration-200 cursor-pointer"
            onClick={() => {
              setColor("#38BDF8");
            }}
          >
            Sky
          </div>
          <div
            className="p-3 bg-indigo-400 rounded-md shadow w-24 text-center hover:w-28 duration-200 cursor-pointer"
            onClick={() => {
              setColor("#818CF8");
            }}
          >
            Indigo
          </div>
          <div
            className="p-3 bg-fuchsia-400 rounded-md shadow w-24 text-center hover:w-28 duration-200 cursor-pointer"
            onClick={() => {
              setColor("#E879F9");
            }}
          >
            Fuchsia
          </div>
          <div
            className="p-3 bg-pink-400 rounded-md shadow w-24 text-center hover:w-28 duration-200 cursor-pointer"
            onClick={() => {
              setColor("#F472B6");
            }}
          >
            Pink
          </div>
          <div
            className="p-3 bg-slate-400 rounded-md shadow w-24 text-center hover:w-28 duration-200 cursor-pointer"
            onClick={() => {
              setColor("#94A3B8");
            }}
          >
            Slate
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
