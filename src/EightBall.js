import React, { useState} from 'react';
import answers from './answers';
import './EightBall.css'



const EightBall = () =>{
    const initialState = {
        msg: "Think of a Question.",
        color: "black",
    }
    const [answer, setAnswer] = useState(initialState);
    const randomAnswer = ()=>{
        const randIdx = Math.floor(Math.random()* answers.length);
        setAnswer(answers[randIdx])
    };
    const resetAnswer = () =>{
        setAnswer(initialState)
    }
        return (
        <div className='EightBall'>
            <div className='EightBall-answer' onClick={randomAnswer} style={{backgroundColor : answer.color}}>{answer.msg}
            </div>
            <button className='Eightball-reset' onClick={resetAnswer}>Reset</button>
        </div>
    )
}

export default EightBall;