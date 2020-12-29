import { createContext, useReducer, useEffect, useState } from "react";
import { ChildrenProps } from "../types/Themetype";
import timerReducer from "../reducer/timerReducer";

export const defaultTime = {
  pomodoro: 25 ,
  short_break: 5,
  long_break: 15 ,
};

const timerInitialState = {
  isOpen: false,
  timerRunning: false,
  activeMenu: "pomodoro",
  time: defaultTime.pomodoro, // in second, 
  currentTime:defaultTime.pomodoro*60,
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
  reference:null,
};

export const TimerContext = createContext(null);

const TimerProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [timerState, timerDispatch] = useReducer(
    timerReducer,
    timerInitialState
  );
  
  useEffect(()=>{
    // timerState
  },[timerState])

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

  const startPauseTimer=()=>{
    timerDispatch({type:'START-STOP-COUNTDOWN'})
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
        startPauseTimer
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;
