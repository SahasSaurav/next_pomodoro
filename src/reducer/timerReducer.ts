import type { Timer, timerReducerType } from "@state/timerType";

const timerReducer = (state: Timer, action: timerReducerType) => {
	let timing = 0;
	switch (action.type) {
		case "OPEN-MODAL":
			return { ...state, isOpen: true };
		case "CLOSE-MODAL":
			return { ...state, isOpen: false };
		case "TOGGLE-TIMER":
			return { ...state, timerRunning: !action.payload };
		case "TOGGLE-MODE":
			return {
				...state,
				timerRunning: false,
				activeMenu: action.payload,
				time: state[action.payload as keyof Timer] as number,
				currentTime: Number(state[action.payload as keyof Timer]) * 60,
			};
		case "TIMER-FORM-SUBMIT":
			if (action.payload?.activeMenu === "pomodoro") {
				timing = action?.payload?.pomodoro;
			} else if (action.payload?.activeMenu === "shortBreak") {
				timing = action?.payload?.shortBreak;
			} else if (action.payload?.activeMenu === "longBreak") {
				timing = action?.payload?.longBreak;
			} else {
				timing = state.time;
			}
			return {
				...state,
				isOpen: false,
				pomodoro: action.payload?.pomodoro,
				shortBreak: action.payload?.shortBreak,
				longBreak: action.payload?.longBreak,
				time: timing,
				currentTime: timing * 60,
				timerRunning: false,
			};
		case "STOP-ON-ZERO":
			return { ...state, timerRunning: false };
		default:
			return state;
	}
};

export default timerReducer;
