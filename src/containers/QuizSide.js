import React from "react";
import { useNavigate } from "react-router-dom";

function QuizSide() {
  const gColor = () => {
    let maxVal = 0xffffff; // 16777215
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`;
  };

  const navigate = useNavigate();

  return (
    <div className={"grid grid-cols-3 gap-5 p-10 w-[80%]"}>
      {new Array(5).fill(null).map((a, index) => {
        return (
          <div
            onClick={() => navigate("/deckView")}
            key={index}
            className={"shadow-mi rounded overflow-hidden roboto-slab"}
          >
            <div
              className={"w-full h-56"}
              style={{ backgroundColor: gColor() }}
            ></div>
            <div className={"bg-white p-5 pb-16"}>
              <h2 className={"text-4xl font-normal"}>Physics</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default QuizSide;
