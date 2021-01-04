import { useContext, useState, useEffect, useCallback, memo } from "react";
import useSound from 'use-sound';

import { TimerContext } from "../context/TimerContext";
import { TimerContextType } from "../types/TimerTypes";
import { convertInMinute, convertInSecond, formatTime } from "../utils/time";


const PomodoroClock = () => {
  const {
    isOpen,
    time,
    timerRunning,
    toggleTimer,
    activeMenu,
    pomodoro,
    shortBreak,
    longBreak,
    stopTimerOnZero,
  } = useContext(TimerContext) as TimerContextType ;

  const [countdownTime, setCounttdownTime] = useState<number>(time);
  const [currentTime, setCurrentTime] = useState<number>(countdownTime * 60);
  const [refernce, setRefernce] = useState<null|NodeJS.Timeout>(null);
  const [reset, setReset] = useState<boolean>(false);
  const [beepPlay,{stop}]=useSound('/Timer_Beep.mp3');
  // const [soundOnPlay]=useSound('/switch-on.mp3')soun
  const [onOff]=useSound('/CASSETTEOFF.mp3')

  const calcTime = () => {
    let t;
    switch (activeMenu) {
      case "pomodoro":
        return (t = pomodoro);
      case "shortBreak":
        return (t = shortBreak);
      case "longBreak":
        return (t = longBreak);
      default:
        return (t = time);
    }
  };

  useEffect(() => {
    const timer = calcTime();
    setCounttdownTime(timer);
    setCurrentTime(timer * 60);
    return () => {
      clearInterval(refernce);
    };
  }, [activeMenu, time]);

  useEffect(() => {
    const stopOnMenuChange = () => {
      if (timerRunning == false) {
        clearInterval(refernce);
      }
    };
    stopOnMenuChange();
  }, [activeMenu,isOpen]);

  const startPauseTimer=useCallback(() => {
    stop()
    if (timerRunning) {
      clearInterval(refernce);
    } else {
      const id = setInterval(() => {
        setCurrentTime((prevState) => {
          if (prevState === 0) {
            clearInterval(refernce);
            setCurrentTime(0);
            stopTimerOnZero();
            setReset(true);
          } else {
            // soundOnPlay()
            return prevState - 1;
          }
        });
      }, 1000);
      setRefernce(id);
    }
  },[currentTime,timerRunning])

  const resetTimer = useCallback(() => {
    if (reset) {
      beepPlay()
      clearInterval(refernce);
      switch (activeMenu) {
        case "pomodoro":
          setCounttdownTime(pomodoro);
          setCurrentTime(pomodoro * 60);
          break;
        case "shortBreak":
          setCounttdownTime(shortBreak);
          setCurrentTime(shortBreak * 60);
          break;
        case "longBreak":
          setCounttdownTime(longBreak);
          setCurrentTime(longBreak * 60);
          break;
        default:
          break;
      }
    } else {
      return;
    }
  }, [reset]);

  const onClickHandler = () => {
        onOff(); //sound
        toggleTimer(timerRunning);
        startPauseTimer();
  };

  useEffect(()=>{
    if(reset){
      setReset(false);
      resetTimer();
    }
  },[reset])

  return (
    <button
      aria-label={reset?'click to reset the timer':timerRunning?'click to pause timer':'click to start timer'}
      onClick={onClickHandler}
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
          strokeDashoffset={276.5 - (currentTime / 60 / time) * 276.5}
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
          {formatTime(convertInMinute(currentTime))}:
          {formatTime(convertInSecond(currentTime))}
        </text>
        <text
          className="font-bold tracking-widest uppercase fill-current"
          style={{ fontFamily: "var(--accent_font)" }}
          fontSize="30%"
          textAnchor="middle"
          x="50%"
          y="70%"
        >
          {currentTime <= 0 ? "RESET" : timerRunning ? "PAUSE" : "START"}
        </text>
      </svg>
    </button>
  );
};

export default memo(PomodoroClock);
