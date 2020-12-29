import { useContext, useState,useEffect } from "react";
import { TimerContext } from "../context/TimerContext";
import { convertInMinute, convertInSecond, formatTime } from "../utils/time";

const PomodoroClock = () => {
  
  const {time,timerRunning,toggleTimer,startPauseTimer,currentTime} =useContext(TimerContext);
 


  // const [countdownTime,setCounttdownTime]=useState<number>(time)
  // const [currentTime,setCurentTime]=useState<number>(countdownTime*60)

  // const [refernce,setRefernce]=useState(null)
  
 
  // const  startPauseTimer=()=>{
  //   if(timerRunning){
  //     clearInterval(refernce)
  //   }else{
  //     const id=setInterval(()=>{
  //       setCurentTime(prevState=> prevState-1)
  //     },1000)
  //     setRefernce(id)
  //   }
  // }
  

  const onClickHandler=()=>{
   toggleTimer(timerRunning)
   startPauseTimer()
  }
  return (
    <button onClick={onClickHandler}
      className="relative flex flex-shrink-0 mx-auto transition-shadow duration-150 ease-in-out rounded-full bg-darkestblue sm:w-96 sm:h-96 w-72 h-72 h shadow-lightwithinset hover:shadow-light active:shadow-lightwithinset focus:outline-none focus:ring-4 ring-opacity-60 ring-lightblue "
      style={{
        borderRadius: "50%",
      }}
    >
      <svg
        id="time-progress"
        viewBox="0 0 100 100"
        className="fill-current text-gray z-100 absolute top-0"
      >
        <circle
          className="fill-current text-darkestblue"
          cx="50"
          cy="50"
          r="48"
        ></circle>
        <circle
          className="duration-500 ease-linear origin-center transform -rotate-90 stroke-current transition-stroke-dashoffset"
          style={{ color: "var(--accent_clr)" }}
          cx="50"
          cy="50"
          r="44"
          data-qa="progress"
          fill="none"
          strokeDasharray="276.5 276.5"
          strokeLinecap="round"
          strokeWidth="3"
           strokeDashoffset={276.5-(((currentTime/60)/time)*276.5)}
          //  "276.5 - durationToPercents(timerDuration, settings.durations[activeAction]) / 100 * 276.5"
        ></circle>
        <text
          className="fill-current text-lighblue font-bold"
          style={{ fontFamily: "var(--accent_font)" }}
          fontSize="150%"
          textAnchor="middle"
          x="50%"
          y="50%"
          dy=".3em"
        >
          {formatTime(convertInMinute(currentTime))}:{formatTime(convertInSecond(currentTime))}
        </text>
        <text
          className="font-bold tracking-widest uppercase fill-current"
          style={{ fontFamily: "var(--accent_font)" }}
          fontSize="30%"
          textAnchor="middle"
          x="50%"
          y="70%"
        >
         {timerRunning?'PAUSE':'START'}
        </text>
      </svg>
    </button>
  );
};

export default PomodoroClock;
