import React from 'react';


const Start = ({ onQuizStart}) => {
    return(
        <div className='card'>
        <div className='card-content'>
           <div className='content'>
               <h1>PRESS START TO BEGIN</h1>
               <button className='BUTTON-1' onClick={onQuizStart}>Start</button>
               </div> 
        </div>

        </div>
    )
}

export default Start;