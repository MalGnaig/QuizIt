import React from 'react'
import AnimatedGif from './animatedGif'

export default function PopUpWindow(props) {
    const{showLose, showVictory} = props
  return (
    <div className='popup-overlay' id='popup'>
        <div className='popup-content'>
            {showVictory && (            
            <AnimatedGif 
            src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDIxdHl5bTJwM3I1NHd1ZHY0bXBwd3gwN2g3d3QzZWoweDRrZTJzcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RzNBbh3vF7Q41oLIE9/giphy.webp'
            alt='Winning gif'
            width='300px'
            height='300px'>
            </AnimatedGif>)}

            {showLose && (            
            <AnimatedGif
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXM1dHAwMHZldWJuZXp5NjEwMGVhc21rbHBjeXI3c3lmNmRwNWZpMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PeKocELyUE6M07yOty/giphy.webp"
            alt="Losing Gif"
            width='300px'
            height='300px'
            />)}

        </div>
    </div>
  )
}
