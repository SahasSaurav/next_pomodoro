import { useState, useContext } from "react";

import Inputs from "./Inputs";
import InputErrorMsg from "./InputErrorMsg";

import { TimerContext } from "@context/TimerContext";
import { ThemeContext } from "@context/ThemeContext";

import type { MouseEvent } from "react";
import type { ThemeContextType } from "@state/themeType";
import type { TimerContextType } from "@state/timerType";

const SettingForm = () => {
	const { pomodoro, shortBreak, longBreak, timerSetting, activeMenu } = useContext(
		TimerContext
	) as TimerContextType;
	const { changeAccentColor, changeAccentFont } = useContext(ThemeContext) as ThemeContextType;
	const [selectedColor, setSelectedColor] = useState<string>("--accent_coral");
	const [selectedFont, setSelectedFont] = useState<string>("--font_kumbh_sans");
	const [pomoTime, setPomoTime] = useState<number>(pomodoro);
	const [shortTime, setShortTime] = useState<number>(shortBreak);
	const [longTime, setLongTime] = useState<number>(longBreak);
	const [error, setError] = useState<boolean>(false);

	const fontTypes: string[] = ["--font_kumbh_sans", "--font_roboto_slab", "--font_space_mono"];
	const colorTypes: string[] = ["--accent_coral", "--accent_cyan", "--accent_violet"];

	const onSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		timerSetting(pomoTime, shortTime, longTime, activeMenu);
		changeAccentColor(selectedColor);
		changeAccentFont(selectedFont);
	};

	return (
		<>
			<form className="divide-y  divide-gray" onSubmit={onSubmitHandler}>
				<div className="py-4">
					<h2 className=" text-sm font-bold tracking-wide uppercase">Time (minutes)</h2>
					<div className="grid grid-cols-3 gap-4 ">
						<Inputs label="pomodoro" value={pomoTime} setValue={setPomoTime} setError={setError} />
						<Inputs
							label="short break"
							value={shortTime}
							setValue={setShortTime}
							setError={setError}
						/>
						<Inputs
							label="long break"
							value={longTime}
							setValue={setLongTime}
							setError={setError}
						/>
					</div>
					{error && <InputErrorMsg />}
				</div>

				<div className="flex items-center justify-between py-4">
					<h2 className="py-4 text-sm font-bold tracking-wide uppercase">Font</h2>
					<div className="flex gap-4">
						{fontTypes.map((font) => {
							return (
								<button
									key={font}
									onClick={(e: MouseEvent<HTMLButtonElement>) =>
										setSelectedFont(e.currentTarget.dataset.font as unknown as string)
									}
									className={`flex items-center justify-center w-8 h-8 text-sm rounded-full ring-0 ring-gray ring-offset-2 hover:ring-2 font-kumbh-sans font-bold focus:outline-none ${
										selectedFont === font ? "text-gray bg-darkblue" : "bg-gray text-darkblue"
									}`}
									type="button"
									title={font.split("_").slice(1).join(" ")}
									data-font={font}
									aria-label={`click to change to ${font.slice(7)}`}
								>
									Aa
								</button>
							);
						})}
					</div>
				</div>
				<div>
					<div className="flex justify-between py-4">
						<h2 className="py-4 pb-2 text-sm font-bold tracking-wide uppercase">Color</h2>
						<div className="flex gap-4">
							{colorTypes.map((color) => {
								return (
									<button
										// eslint-disable-next-line @typescript-eslint/no-explicit-any
										onClick={(e: any) => setSelectedColor(e.target.dataset.color)}
										key={color}
										title={color.split("_")[1]}
										className={`flex items-center justify-center w-8 h-8 rounded-full ring-0 ring-gray ring-offset-2  focus:outline-none hover:ring-2 relative  `}
										style={{
											backgroundColor: `var(${color})`,
										}}
										type="button"
										data-color={color}
										aria-label={`click to change the accent color to ${color.slice(9)}`}
									>
										<svg
											className={`stroke-darkestblue ${
												selectedColor === color ? "block" : "hidden"
											}`}
											height="11"
											width="15"
											viewBox="0 0 15 11"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M1 5.5L4.95263 9.45263L13.4053 1" strokeWidth="2"></path>
										</svg>
									</button>
								);
							})}
						</div>
					</div>
				</div>

				<button
					className="block px-8 py-2 mx-auto -mb-8 text-white text-center transition-colors duration-200 ease-in-out rounded-full bg-coral hover:bg-red-300  focus:outline-none "
					aria-label="apply change to the setting"
					data-qa="apply-btn"
					type="submit"
				>
					Apply
				</button>
			</form>
		</>
	);
};

export default SettingForm;
