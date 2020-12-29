import { clearInterval } from 'timers';
import { defaultTime } from '../context/TimerContext';

const timerReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN-MODAL':
      return { ...state, isOpen: true }
    case 'CLOSE-MODAL':
      return { ...state, isOpen: false }
    case 'TOGGLE-TIMER':
      return { ...state, timerRunning: !action.payload }
    case 'TOGGLE-MODE':
      const {timerRunning}=state
      return { ...state, activeMenu: action.payload, time: state[action.payload],currentTime:state[action.payload]*60 }
    case 'TIMER-FORM-SUBMIT':
      let timing=null
      const { activeMenu } = action.payload
      if (activeMenu === 'pomodoro') {
        timing = action.payload.pomodoro
      } else if (activeMenu === 'shortBreak') {
        timing = action.payload.shortBreak
      } else if (activeMenu === 'longBreak') {
        timing = action.payload.longBreak
      } else {
        timing = state.time
      }
      return { ...state, isOpen: false, pomodoro: action.payload.pomodoro, shortBreak: action.payload.shortBreak, longBreak: action.payload.longBreak, time:timing ,currentTime:timing*60 }
    case 'START-STOP-COUNTDOWN':
      if (state.timerRunning) {
        clearInterval(state.reference)
      } else {
        state.reference = setInterval(() => {
          const { currentTime } = state
          state.currentTime = currentTime - 1
        }, 1000)
        if (state.currentTime === 0) {
          clearInterval(state.refernce)
        }
      }

      return state;
    default:
      return state;
  }
};

export default timerReducer;
