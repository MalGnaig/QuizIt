import React, { useRef, useState, useEffect } from "react";
import AnimatedGif from "../components/animatedGif";
import Category from "./Category";
import Users from "./Users";

export default function Login() {
  const [startClicked, setStartClicked] = useState(false);
  const categoryRef = useRef(null);

  const handleStartClick = () => {
    setStartClicked(true);
  };

  // useEffect to scroll after `startClicked` changes to true
  useEffect(() => {
    if (startClicked && categoryRef.current) {
      window.scrollTo({
        top: categoryRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, [startClicked]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-l from-purple-500 to-violet-800 text-white text-sm sm:text-base pt-20">
      <div className="flex flex-col items-center min-h-screen">
        <h1 className="modak-regular flex justify-center items-center text-[80px] mb-10">
          WELCOME TO QUIZIT
        </h1>

        <div className="flex justify-center items-center mb-10">
          <AnimatedGif
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWtjY3E0Y2U2NG1qbHM4ajZsM2hyYWF4YzVwZWNodWtsYWx6MGxlbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GRt00QcMxQjNgurVHB/giphy.webp"
            alt="firstThinkingGif"
            width="300px"
            height="300px"
          />
        </div>

        <p className="modak-thin flex justify-center items-center text-[24px] mb-10">
          Welcome to QuizIt 🎉—the ultimate brain workout and reality check!
          Think you’re a trivia genius? Prepare for mind-boggling questions 🤯,
          ridiculous rewards (aka serious bragging rights), and epic wins and
          fails. From bizarre facts to “Wait, I should know this!” moments,
          QuizIt has it all. So grab your thinking cap 🎩, and get ready to
          laugh, learn, and flex those brain cells 🧠.
        </p>

        <button className="bubbly-button mb-20" onClick={handleStartClick}>
          Start
        </button>

        {/* Add ref to Category component for scrolling */}
        {startClicked && (
          <div ref={categoryRef} className="w-full min-h-screen pt-20">
            <Users />
            <Category startClicked={startClicked} />
          </div>
        )}
      </div>
    </div>
  );
}
