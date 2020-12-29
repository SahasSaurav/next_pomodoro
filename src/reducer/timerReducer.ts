import { defaultTime } from '../context/TimerContext';

const timerReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN-MODAL':
      return { ...state, isOpen: true }
    case 'CLOSE-MODAL':
      return { ...state, isOpen: false }
    case 'TOGGLE-TIMER':
      return { ...state, start: !action.payload }
    case 'TOGGLE-MODE':
      return { ...state, active: action.payload, time: state[action.payload] }
    case 'TIMER-FORM-SUBMIT':
      let timing
      const { active } = action.payload
      console.log(active);

      if (active === 'pomodoro') {
        timing = action.payload.pomodoro
      } else if (active === 'shortBreak') {
        timing = action.payload.shortBreak
      } else if (active === 'longBbreak') {
        timing = action.payload.longBreak
      } else {
        timing = state.time
      }
      return { ...state, isOpen: false, pomodoro: action.payload.pomodoro, shortBreak: action.payload.shortBreak, longBreak: action.payload.longBreak, time: timing }
    case 'START-STOP-COUNTDOWN':
      let timer
      if (state.active) {
        timer = setInterval(() => {
          console.log('hello');
          console.log(state.time)
          return state.time = Number(((state.time*60 - 1)/60).toFixed(2))
        }, 1000)
        if (state.time == 0) {
          clearInterval(timer)
          state.active = false;
        }
      }
      else {
        clearInterval(timer)
      }
      
      return state;
    default:
      return state;
  }
};

export default timerReducer;
