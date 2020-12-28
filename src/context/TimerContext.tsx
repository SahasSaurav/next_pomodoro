import {createContext,useReducer,useEffect,useState} from 'react'
import { ChildrenProps } from '../types/Themetype'
import timerReducer from '../reducer/timerReducer'

const timerInitialState={
  isOpen:false, 
  start:false,
  time:25*60,// in second
  
}

export const TimerContext =createContext(null)

const TimerProvider:React.FC<ChildrenProps>=({children})=>{
  const [timerState,timerDispatch]=useReducer(timerReducer,timerInitialState);

  const openModal=()=>{
    timerDispatch({type:"OPEN-MODAL"})
  }
  const closeModal=()=>{
    timerDispatch({type:"CLOSE-MODAL"})
  }
  const toggleTimer=(start:boolean)=>{
    timerDispatch({type:'TOGGLE-TIMER',payload:start})
  }

  return (
    <TimerContext.Provider value={{...timerState,openModal,closeModal,toggleTimer}}>
      {children}
    </TimerContext.Provider>
  )
}

export default TimerProvider; 