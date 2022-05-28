import { useContext, useState, useEffect, useCallback, memo } from "react";
import useSound from "use-sound";

import { TimerContext } from "@context/TimerContext";
import { convertInMinute, convertInSecond, formatTime } from "@utils/time";

import type { TimerContextType } from "@state/timerType";

const PomodoroClock = () => {
	const {
		isOpen,
		time,
		timerRunning,
		toggleTimer,
		activeMenu,
		pomodoro,
		shortBreak,
		longBreak,
		stopTimerOnZero,
	} = useContext(TimerContext) as TimerContextType;

	const [countdownTime, setCounttdownTime] = useState<number>(time);
	const [currentTime, setCurrentTime] = useState<number | undefined>(countdownTime * 60);
	const [reference, setReference] = useState<null | NodeJS.Timeout>(null);
	const [reset, setReset] = useState<boolean>(false);
	const [beepPlay, { stop }] = useSound("/assets/sound/Timer_Beep.mp3");
	// const [soundOnPlay]=useSound('/switch-on.mp3')
	const [onOff] = useSound("assets/sound/CASSETTEOFF.mp3");

	const calcTime = () => {
		let t;
		switch (activeMenu) {
			case "pomodoro":
				return (t = pomodoro);
			case "shortBreak":
				return (t = shortBreak);
			case "longBreak":
				return (t = longBreak);
			default:
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				return (t = time);
		}
	};

	useEffect(() => {
		const timer = calcTime();
		setCounttdownTime(timer);
		setCurrentTime(timer * 60);
		return () => {
			clearInterval(reference as NodeJS.Timeout);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeMenu, time]);

	useEffect(() => {
		const stopOnMenuChange = () => {
			if (timerRunning == false) {
				clearInterval(reference as NodeJS.Timeout);
			}
		};
		stopOnMenuChange();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeMenu, isOpen]);

	const startPauseTimer = useCallback(() => {
		stop();
		if (timerRunning) {
			clearInterval(reference as NodeJS.Timeout);
		} else {
			const id = setInterval(() => {
				setCurrentTime((prevCurrentTime) => {
					if (prevCurrentTime === 0) {
						clearInterval(reference as NodeJS.Timeout);
						setCurrentTime(0);
						stopTimerOnZero();
						setReset(true);
					} else {
						// soundOnPlay()
						return (prevCurrentTime as number) - 1;
					}
				});
			}, 1000);
			setReference(id);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentTime, timerRunning]);

	const resetTimer = useCallback(() => {
		if (reset) {
			beepPlay();
			clearInterval(reference as NodeJS.Timeout);
			switch (activeMenu) {
				case "pomodoro":
					setCounttdownTime(pomodoro);
					setCurrentTime(pomodoro * 60);
					break;
				case "shortBreak":
					setCounttdownTime(shortBreak);
					setCurrentTime(shortBreak * 60);
					break;
				case "longBreak":
					setCounttdownTime(longBreak);
					setCurrentTime(longBreak * 60);
					break;
				default:
					break;
			}
		} else {
			return;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [reset]);

	const onClickHandler = () => {
		onOff(); //sound
		toggleTimer(timerRunning);
		startPauseTimer();
	};

	useEffect(() => {
		if (reset) {
			setReset(false);
			resetTimer();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [reset]);

	return (
		<button
			aria-label={
				reset
					? "click to reset the timer"
					: timerRunning
					? "click to pause timer"
					: "click to start timer"
			}
			onClick={onClickHandler}
			className="relative flex flex-shrink-0 mx-auto transition-shadow duration-150 ease-in-out rounded-full bg-darkestblue sm:w-96 sm:h-96 w-72 h-72 h shadow-lightwithinset hover:shadow-light active:shadow-lightwithinset focus:outline-none focus:ring-4 ring-opacity-60 ring-lightblue "
			style={{
				borderRadius: "50%",
				background: "#161932",
			}}
		>
			<svg id="time-progress" viewBox="0 0 100 100" className="fill-gray  z-100 absolute top-0">
				<circle className="fill-darkestblue" cx="50" cy="50" r="48"></circle>
				<circle
					className="duration-500 ease-linear origin-center transform -rotate-90 transition-stroke-dashoffset"
					style={{ stroke: "var(--accent_clr)" }}
					cx="50"
					cy="50"
					r="44"
					data-qa="progress"
					fill="none"
					strokeDasharray="276.5 276.5"
					strokeLinecap="round"
					strokeWidth="3"
					strokeDashoffset={276.5 - ((currentTime as number) / 60 / time) * 276.5}
				></circle>
				<text
					className="fill-lighblue font-bold"
					style={{ fontFamily: "var(--accent_font)" }}
					fontSize="150%"
					textAnchor="middle"
					x="50%"
					y="50%"
					dy=".3em"
				>
					{formatTime(convertInMinute(currentTime as number))}:
					{formatTime(convertInSecond(currentTime as number))}
				</text>
				<text
					className="font-bold tracking-widest uppercase fill-current"
					style={{ fontFamily: "var(--accent_font)" }}
					fontSize="30%"
					textAnchor="middle"
					x="50%"
					y="70%"
				>
					{(currentTime as number) <= 0 ? "RESET" : timerRunning ? "PAUSE" : "START"}
				</text>
			</svg>
		</button>
	);
};

export default memo(PomodoroClock);
