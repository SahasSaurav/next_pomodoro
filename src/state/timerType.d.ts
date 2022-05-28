export interface defaultTimeType {
	pomodoro: number;
	shortBreak: number;
	longBreak: number;
}

export interface Timer {
	isOpen: boolean;
	timerRunning: boolean;
	activeMenu: string;
	time: number;
	currentTime: number;
	pomodoro: number;
	shortBreak: number;
	longBreak: number;
}

export interface TimerContextType {
	isOpen: boolean;
	timerRunning: boolean;
	activeMenu: string;
	time: number;
	currentTime: number;
	pomodoro: number;
	shortBreak: number;
	longBreak: number;
	openModal: () => void;
	closeModal: () => void;
	toggleTimer: (start: boolean) => void;
	toggleFilterMode: (mode: string) => void;
	timerSetting: (
		pomodoro: number,
		shortBreak: number,
		longBreak: number,
		activeMenu: string
	) => void;
	stopTimerOnZero: () => void;
}

export type timerReducerType =
	| { type: "OPEN-MODAL" }
	| { type: "CLOSE-MODAL" }
	| { type: "TOGGLE-TIMER"; payload: boolean }
	| { type: "TOGGLE-MODE"; payload: string }
	| { type: "STOP-ON-ZERO" }
	| {
			type: "TIMER-FORM-SUBMIT";
			payload: { pomodoro: number; shortBreak: number; longBreak: number; activeMenu: string };
			// eslint-disable-next-line no-mixed-spaces-and-tabs
	  };
