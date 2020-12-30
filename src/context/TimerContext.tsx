import { createContext, useReducer, useEffect, useState } from "react";
import { ChildrenProps } from "../types/Themetype";
import timerReducer from "../reducer/timerReducer";

export const defaultTime = {
  pomodoro: 25 ,
  shortBreak: 5,
  longBreak: 15 ,
};

const timerInitialState = {
  isOpen: false,
  timerRunning: false,
  activeMenu: "pomodoro",
  time: defaultTime.pomodoro, // in second, 
  currentTime: defaultTime.pomodoro, // in second, 
  pomodoro: 25,
  shortBreak: 1/12,
  longBreak: 15,
};

export const TimerContext = createContext(null);

const TimerProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [timerState, timerDispatch] = useReducer(
    timerReducer,
    timerInitialState
  );
  

  const openModal = () => {
    timerDispatch({ type: "OPEN-MODAL" });
  };
  const closeModal = () => {
    timerDispatch({ type: "CLOSE-MODAL" });
  };
  const toggleTimer = (start: boolean) => {
    timerDispatch({ type: "TOGGLE-TIMER", payload: start });
  };
  const toggleFilterMode = (mode: string) => {
    timerDispatch({ type: "TOGGLE-MODE", payload: mode });
  };
  const timerSetting = (
    pomodoro: number,
    shortBreak: number,
    longBreak: number,
    activeMenu:string,
  ) => {
    timerDispatch({
      type: "TIMER-FORM-SUBMIT",
      payload: { pomodoro, shortBreak, longBreak,activeMenu },
    });
  };

  const stopTimerOnZero=()=>{
    timerDispatch({type:'STOP-ON-ZERO'})
  }
  const resetTime=()=>{
    timerDispatch({type:'RESET-TIMER'})
  }

  return (
    <TimerContext.Provider
      value={{
        ...timerState,
        openModal,
        closeModal,
        toggleTimer,
        toggleFilterMode,
        timerSetting,
        stopTimerOnZero,
        resetTime,
        // startPauseTimer
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;
