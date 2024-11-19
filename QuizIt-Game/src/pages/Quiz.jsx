import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { CATEGORIES } from '../categories';


export default function Quiz() {
    const location = useLocation();
    const { cat, catIndex } = location.state || {}; // Destructure and use default value in case state is undefined
    const [questionIndex, setQuestionIndex] = useState(0);
    const [Answer, setAnswer] = useState("");
    
    const questions = CATEGORIES[cat].questions;

    

    return (
        <div className='min-h-screen flex flex-col bg-gradient-to-l from-purple-500 to-violet-800 text-white text-sm sm:text-base pt-20 items-center'>
            <div className='floating-cloud'>
                <h1 className='modak-regular text-5xl mb-10'>Category: {cat}</h1>
            </div>
            <p className='modak-regular text-2xl mt-20'>{questions[questionIndex].question}</p>
            <div className='grid grid-rows-2 grid-flow-col gap-4'>
                {questions[questionIndex].options.map((options, optionsIndex) => (
                    <button className='bubbly-buttonq mt-10' key={optionsIndex} onClick={() => {
                        setAnswer(options);
                    }}>
                        {options}
                    </button>
                ))}
            </div>

        </div>
    );
}
