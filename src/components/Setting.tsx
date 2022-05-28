import { useContext } from "react";

import SettingForm from "./SettingForm";
import { TimerContext } from "@context/TimerContext";

import type { TimerContextType } from "@state/timerType";

const Setting = () => {
	const { closeModal } = useContext(TimerContext) as TimerContextType;
	return (
		<>
			<header className="flex flex-row jusitify-between p-6 -mx-8 border-b-2 border-gray">
				<h2 className="p-0 text-2xl font-semibold">Settings</h2>
				<button
					onClick={closeModal}
					aria-label="close modal"
					className="ml-auto rounded-md p-1 focus:outline-none focus:ring-2 "
				>
					<svg
						className="rounded-full fill-darkblue  hover:text-coral  transition-transform duration transform scale-125 hover:scale-150 "
						xmlns="http://www.w3.org/2000/svg"
						height="14"
						width="14"
					>
						<path d="M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z" />
					</svg>
				</button>
			</header>
			<SettingForm />
		</>
	);
};

export default Setting;
