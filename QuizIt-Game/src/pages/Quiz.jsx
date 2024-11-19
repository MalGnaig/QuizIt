import React from 'react';
import { useLocation } from "react-router-dom";

export default function Quiz() {
    const location = useLocation();
    const { cat, catIndex } = location.state || {}; // Destructure and use default value in case state is undefined

    

    return (
        <div className='min-h-screen flex flex-col bg-gradient-to-l from-purple-500 to-violet-800 text-white text-sm sm:text-base pt-20'>
            <h1>Quiz for Category: {cat}</h1>
            <p>Category Index: {catIndex}</p>
            {/* Render quiz questions or other content based on `cat` and `catIndex` */}
        </div>
    );
}
