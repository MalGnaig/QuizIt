import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { CATEGORIES } from '../categories';
import PopUpWindow from '../components/PopUpWindow';

export default function Quiz() {
    const location = useLocation();
    const { cat } = location.state || {};
    const [questionIndex, setQuestionIndex] = useState(0);
    const [Answer, setAnswer] = useState("");
    const [Chosen, setChosen] = useState(false);
    const [Score, setScore] = useState(0);
    const [Correct, setCorrect] = useState(false);
    const [showVictory, setShowVictory] = useState(false);
    const [showLose, setShowLose] = useState(false);
    const [ConfirmButton, setConfirmButton] = useState(false);
    const navigate = useNavigate();

    const questions = CATEGORIES[cat]?.questions || [];

    useEffect(() => {
        if (ConfirmButton) {
            // Show correct/incorrect popup
            if (Correct) {
                setShowVictory(true);
                setShowLose(false);
            } else {
                setShowVictory(false);
                setShowLose(true);
            }

            // Proceed to next question after a delay
            const timer = setTimeout(() => {
                setShowVictory(false);
                setShowLose(false);
                setConfirmButton(false);

                if (questionIndex < questions.length - 1) {
                    setQuestionIndex((prevIndex) => prevIndex + 1);
                    setChosen(false);
                } else {
                    navigate('/Score', { state: { Score } });
                }
            }, 2000); // 2-second delay for popup

            return () => clearTimeout(timer); // Cleanup timeout
        }
    }, [ConfirmButton, Correct]);

    return (
        <div className='min-h-screen flex flex-col bg-gradient-to-l from-purple-500 to-violet-800 text-white text-sm sm:text-base pt-20 items-center'>
            <div className='floating-cloud'>
                <h1 className='modak-regular text-5xl mb-10'>Category: {cat}</h1>
            </div>

            <p className='modak-regular text-2xl mt-20'>{questions[questionIndex]?.question}</p>
            <div className='grid grid-rows-2 grid-flow-col gap-4'>
                {questions[questionIndex]?.options.map((options, optionsIndex) => (
                    <button
                        key={optionsIndex}
                        onClick={() => {
                            setAnswer(options);
                            setChosen(true);
                            if (options === questions[questionIndex]?.answer) {
                                setScore((prevScore) => prevScore + 1);
                                setCorrect(true);
                            } else {
                                setCorrect(false);
                            }
                        }}
                        className={`bubbly-buttonq mt-10 ${
                            Answer === options ? 'bg-pink-900' : 'bg-pink-500'
                        }`}
                    >
                        {options}
                    </button>
                ))}
            </div>

            <div className='mt-10'>
                {Chosen && (
                    <button
                        className='mt-10 bubbly-buttonq bg-emerald-400'
                        onClick={() => {
                            setConfirmButton(true);
                        }}
                    >
                        Confirm
                    </button>
                )}
            </div>

            {showVictory && <PopUpWindow showVictory ={showVictory} />}
            {showLose && <PopUpWindow showLose = {showLose} />}
        </div>
    );
}
