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
  start: false,
  active: "pomodoro",
  time: defaultTime.pomodoro, // in second, 
  pomodoro: 25,
  shortBreak: 5,
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
    active:string,
  ) => {
    timerDispatch({
      type: "TIMER-FORM-SUBMIT",
      payload: { pomodoro, shortBreak, longBreak,active },
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
