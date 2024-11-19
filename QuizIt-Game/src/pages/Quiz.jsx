import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { CATEGORIES } from '../categories';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

export default function Quiz() {
    const location = useLocation();
    const { cat, catIndex } = location.state || {}; // Destructure and use default value in case state is undefined
    const [questionIndex, setQuestionIndex] = useState(0);
    const [Answer, setAnswer] = useState("");
    const [Chosen, setChosen] = useState(false);
    const [Score, setScore] = useState(0);
    const [Correct, setCorrect] = useState(false);
    const navigate = useNavigate();

    const [showVictory, setshowVictory] = useState(false);
    const [showLose, setshowLose] = useState(false);
    
    const questions = CATEGORIES[cat].questions;


    useEffect(() => {
        const timer = setTimeout(() => {
            if(showVictory) {
                showWinGif();
            } else {
                showLoseGif();
            }
        }, 3000)
        
      return () => {
        clearTimeout(timer);
      }
    }, [showLose, showVictory])
    

    

    return (
        <div className='min-h-screen flex flex-col bg-gradient-to-l from-purple-500 to-violet-800 text-white text-sm sm:text-base pt-20 items-center'>
            <div className='floating-cloud'>
                <h1 className='modak-regular text-5xl mb-10'>Category: {cat}</h1>
            </div>
            <p className='modak-regular text-2xl mt-20'>{questions[questionIndex].question}</p>
            <div className='grid grid-rows-2 grid-flow-col gap-4'>
                {questions[questionIndex].options.map((options, optionsIndex) => (
                    <button key={optionsIndex} onClick={() => {
                        setAnswer(options);
                        setChosen(true);
                        if(options === questions[questionIndex].answer){
                            setScore((prevScore) => prevScore +1);
                            setCorrect(true);
                        } else {
                            setCorrect(false);
                        }
                    }} className={'bubbly-buttonq mt-10 ' + (Answer === options ? 'bg-pink-900' : 'bg-pink-500' )}>
                        {options}
                    </button>
                ))}
            </div>

            <div className='mt-10'>
                {Chosen && (
                    <button className='mt-10 bubbly-buttonq bg-emerald-400' onClick={() => {
                            if(questionIndex < questions.length - 1) {
                                setQuestionIndex(questionIndex+1);
                                setChosen(false);

                                if(Correct){
                                    setshowVictory(true);
                                    setshowLose(false);

                                    <div className='flex justify-center items-center mb-10'>
                                    <AnimatedGif
                                      src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDIxdHl5bTJwM3I1NHd1ZHY0bXBwd3gwN2g3d3QzZWoweDRrZTJzcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RzNBbh3vF7Q41oLIE9/giphy.webp"
                                      alt="firstThinkingGif"
                                      width='300px'
                                      height='300px'
                                    />
                                  </div>

                                } else {
                                    setshowVictory(false);
                                    setshowLose(true);
                                    <div className='flex justify-center items-center mb-10'>
                                    <AnimatedGif
                                      src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXM1dHAwMHZldWJuZXp5NjEwMGVhc21rbHBjeXI3c3lmNmRwNWZpMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PeKocELyUE6M07yOty/giphy.webp"
                                      alt="firstThinkingGif"
                                      width='300px'
                                      height='300px'
                                    />
                                  </div>
                                }

                            } else {
                                navigate('/Score' ,{state: {Score}});
                            }
                        } 
                    }>
                        Confirm
                    </button>
                )}
                </div>

        </div>
    );
}
