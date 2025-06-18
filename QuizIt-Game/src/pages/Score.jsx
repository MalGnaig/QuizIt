import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Score() {
  const location = useLocation();
  const { Score } = location.state || {}; // Safely access `Score` from state

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-l from-purple-500 to-violet-800 text-white text-sm sm:text-base pt-20 items-center">
      <h1 className="modak-regular text-9xl mb-12">Score</h1>
      <div className="floating-cloud mb-12">
        <p className="modak-regular text-7xl ">{Score} / 7</p>
      </div>

      <button
        className="bubbly-button mt-10"
        onClick={() => {
          navigate("/");
        }}
      >
        {" "}
        Home
      </button>
    </div>
  );
}
