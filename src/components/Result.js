import React,{useState,useEffect} from 'react'
import "./Result.css"
import Homepage from './homepage'
import QuestionBox from './QuestionBox'
// importing circle to show progress bar
import {Circle} from "rc-progress"

export default function Result() {
  // const[mode,setmode]=useState(false)
  const[showQuestion,setshowQuestion]=useState(false)
  // const[marks,setMarks]=useState(0)

  const playAgain=()=>{
    setshowQuestion(true)
  }

  // const changeMode=()=>{
  //   setmode(!mode)
  // }

  //setting score to local storage
  let scoreValue=window.localStorage.getItem("score")

  let percentage=(scoreValue/5)*100




 

  return (
  // conditional rendering between homepage and result page
    <div>
      {showQuestion?(<Homepage />):(
        <div className='result-container'>
   <h1 className='result'>Result</h1>
   <div class="progress-container">
    <Circle 
    width="150px"
    percent={percentage}
    strokeColor="#4be823"
    strokeWidth={5}
    trailColor='#fff'
    trailWidth={5}
    strokeLinecap='square'
    transition="stroke-width 0.3s ease-in-out"
    />
</div>
  

   <h2 className='score'>{scoreValue} out 5 Answers are correct ({percentage} %)</h2>
   <h3></h3>
   <div className='play-again-btn-cont'>
   <button className='play-again-btn' onClick={playAgain}>Restart</button>
   </div>
 </div>

      )}
 
    </div>
  )
}