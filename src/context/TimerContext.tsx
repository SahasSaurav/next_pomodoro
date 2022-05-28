import { createContext, useReducer } from "react";
import timerReducer from "@reducer/timerReducer";

import type { ChildrenProps } from "@state/themeType";
import type { defaultTimeType, Timer, TimerContextType } from "@state/timerType";

export const defaultTime: defaultTimeType = {
	pomodoro: 25,
	shortBreak: 5,
	longBreak: 15,
};

const timerInitialState: Timer = {
	isOpen: false,
	timerRunning: false,
	activeMenu: "pomodoro",
	time: defaultTime.pomodoro, // in second,
	currentTime: defaultTime.pomodoro, // in second,
	pomodoro: 25,
	shortBreak: 5,
	longBreak: 15,
};

export const TimerContext = createContext<TimerContextType | null>(null);

const TimerProvider: React.FC<ChildrenProps> = ({ children }) => {
	const [timerState, timerDispatch] = useReducer(timerReducer, timerInitialState);

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
		activeMenu: string
	) => {
		timerDispatch({
			type: "TIMER-FORM-SUBMIT",
			payload: { pomodoro, shortBreak, longBreak, activeMenu },
		});
	};

	// resolve the error:
	const stopTimerOnZero = () => {
		timerDispatch({ type: "STOP-ON-ZERO" });
	};

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
			}}
		>
			{children}
		</TimerContext.Provider>
	);
};

export default TimerProvider;
