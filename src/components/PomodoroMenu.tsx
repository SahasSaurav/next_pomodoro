import { useContext } from "react";
import { TimerContext } from "@context/TimerContext";

import type { MouseEvent } from "react";
import type { TimerContextType } from "@state/timerType";

const PomodoroMenu = () => {
	const { activeMenu, toggleFilterMode } = useContext(TimerContext) as TimerContextType;
	const menuList = ["pomodoro", "short_Break", "long_Break"];
	return (
		<div className="grid max-w-sm grid-cols-3 gap-2 p-2 bg-darkblue text-white rounded-3xl  ">
			{menuList.map((item) => {
				return (
					<button
						key={item}
						onClick={(e: MouseEvent<HTMLButtonElement>) =>
							toggleFilterMode(e.currentTarget.dataset.item as unknown as string)
						}
						data-item={item.split("_").join("")}
						aria-label={`click to go ${item} section`}
						className={`py-2 px-4 text-sm font-bold transition-colors ease-in-out duration-300 rounded-full focus:outline-none focus:ring-4 ring-lightblue ring-opacity-60 ${
							activeMenu === item.split("_").join("") ? "active" : ""
						} `}
					>
						{item.split("_").join(" ").toLowerCase()}
					</button>
				);
			})}
		</div>
	);
};

export default PomodoroMenu;
