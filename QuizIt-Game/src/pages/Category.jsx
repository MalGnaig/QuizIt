import React, { Children } from 'react'
import Login from './Login';
import { CATEGORIES } from '../categories';
import { useNavigate } from "react-router-dom";

export default function Category(props) {
    const{startClicked} = props;
    const navigate = useNavigate();



  return (
    <div className='grid grid-rows-3 grid-flow-col gap-7 min-h-screen'>
        {startClicked && (
            Object.keys(CATEGORIES).map((cat, catIndex) => 
                <button key={catIndex} onClick={() => navigate("/Quiz" ,{state:{cat, catIndex}})} className='bubbly-button mb-10'> {/* Using 'state' within the navigate function I am passing down this information to the other page*/}
                    <span>{cat}</span>
                </button>
            ) 
        )
        }
    </div>
  )
}
