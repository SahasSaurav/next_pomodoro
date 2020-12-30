import { defaultTime } from "../context/TimerContext";

const timerReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN-MODAL':
      return { ...state, isOpen: true }
    case 'CLOSE-MODAL':
      return { ...state, isOpen: false }
    case 'TOGGLE-TIMER':
      return { ...state, timerRunning: !action.payload }
    case 'TOGGLE-MODE':
      return { ...state, timerRunning: false, activeMenu: action.payload, time: state[action.payload], currentTime: state[action.payload] * 60 }
    case 'TIMER-FORM-SUBMIT':
      let timing = null
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
      return { ...state, isOpen: false, pomodoro: action.payload.pomodoro, shortBreak: action.payload.shortBreak, longBreak: action.payload.longBreak, time: timing, currentTime: timing * 60 }
      case 'STOP-ON-ZERO':
        return {...state,timerRunning:false}

    default:
      return state;
  }
};

export default timerReducer;
