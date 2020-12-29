import { useState, useContext } from "react";

import InputErrorMsg from "./InputErrorMsg";
import Inputs from "./Inputs";

import { TimerContext } from "../context/TimerContext";
import { ThemeContext } from "../context/ThemeContext";

const SettingForm = () => {
  const { pomodoro, shortBreak, longBreak, timerSetting, active } = useContext(TimerContext);
  const {changeAccentColor,changeAccentFont} =useContext(ThemeContext)
  const [selectedColor, setSelectedColor] = useState("--accent_coral");
  const [selectedFont, setSelectedFont] = useState("--font_kumbh_sans");
  const [pomoTime, setPomoTime] = useState(pomodoro??25);
  const [shortTime, setShortTime] = useState(shortBreak??5);

  const [longTime, setLongTime] = useState(longBreak??15);
  const fontTypes = [
    "--font_kumbh_sans",
    "--font_roboto_slab",
    "--font_space_mono",
  ];
  const colorTypes = ["--accent_coral", "--accent_cyan", "--accent_violet"];

  const onSubmitHandler = (e) => {
    e.preventDefault();
    timerSetting(pomoTime, shortTime, longTime,active);
    changeAccentColor(selectedColor)
    changeAccentFont(selectedFont)
  };

  return (
    <>
      <form className="divide-y  divide-gray" onSubmit={onSubmitHandler}>
        <div className="py-4">
          <h2 className=" text-sm font-bold tracking-wide uppercase">
            Time (minutes)
          </h2>
          <div className="grid grid-cols-3 gap-4 ">
            <Inputs label="pomodoro" value={pomoTime} setValue={setPomoTime} />
            <Inputs
              label="short break"
              value={shortTime}
              setValue={setShortTime}
            />
            <Inputs
              label="long break"
              value={longTime}
              setValue={setLongTime}
            />
          </div>
          {((pomoTime || shortTime || longTime) > 59 ||(pomoTime || shortTime || longTime) <1) && <InputErrorMsg />}
        </div>

        <div className="flex items-center justify-between py-4">
          <h2 className="py-4 text-sm font-bold tracking-wide uppercase">
            Font
          </h2>
          <div className="flex gap-4">
            {fontTypes.map((font) => {
              return (
                <button
                  key={font}
                  onClick={(e) => setSelectedFont(e.target.dataset.font)}
                  className={`flex items-center justify-center w-8 h-8 text-sm rounded-full ring-0 ring-gray ring-offset-2 hover:ring-2 font-kumbh-sans font-bold focus:outline-none ${
                    selectedFont === font
                      ? "text-gray bg-darkblue"
                      : "bg-gray text-darkblue"
                  }`}
                  type="button"
                  data-font={font}
                >
                  Aa
                </button>
              );
            })}
          </div>
        </div>
        <div>
          <div className="flex justify-between py-4">
            <h2 className="py-4 pb-2 text-sm font-bold tracking-wide uppercase">
              Color
            </h2>
            <div className="flex gap-4">
              {colorTypes.map((color) => {
                return (
                  <button
                    onClick={(e) => setSelectedColor(e.target.dataset.color)}
                    key={color}
                    className={`flex items-center justify-center w-8 h-8 rounded-full ring-0 ring-gray ring-offset-2  focus:outline-none hover:ring-2 `}
                    style={{
                      backgroundColor: `var(${color})`,
                    }}
                    type="button"
                    data-color={color}
                  >
                    <svg
                      className={`stroke-current text-darkestblue ${
                        selectedColor === color ? "block" : "hidden"
                      }`}
                      height="11"
                      width="15"
                      viewBox="0 0 15 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5.5L4.95263 9.45263L13.4053 1"
                        strokeWidth="2"
                      ></path>
                    </svg>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <button
          className="block px-8 py-2 mx-auto -mb-8 text-white text-center transition-colors duration-200 ease-in-out rounded-full bg-coral hover:bg-red-300  focus:outline-none "
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
