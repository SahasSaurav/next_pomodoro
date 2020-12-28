import React from "react";

const SettingForm = () => {
  const inputTypes = ["pomodoro", "short break", "long break"];
  const fontTypes = ["font-kumbh-sans", "font-roboto-slab", "font-space-mono"];
  const colorTypes=['bg-coral','bg-cyan','bg-violet']
  return (
    <>
      <form className="divide-y  divide-gray">
        <div className="py-4">
          <h2 className=" text-sm font-bold tracking-wide uppercase">
            Time (minutes)
          </h2>
          <div className="grid grid-cols-3 gap-4 ">
            {inputTypes.map((item) => {
              return (
                <div key={item}>
                  <label
                    className="inline-block text-sm font-semibold text-darkblue mb-1"
                    htmlFor={item}
                  >
                    {item}
                  </label>
                  <input
                    className="w-full h-10 p-2 font-bold bg-gray rounded-xl focus:outline-none focus:ring-4 focus:ring-lightblue"
                    min="1"
                    max="59"
                    step="1"
                    type="number"
                    id={item}
                    aria-label={`set time for `}
                  />
                </div>
              );
            })}
          </div>
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
                  className="flex items-center justify-center w-8 h-8 text-sm rounded-full ring-0 ring-gray ring-offset-2 hover:ring-2 font-kumbh-sans bg-gray text-darkblue font-bold   "
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
            <h2 className="py-4 text-sm font-bold tracking-wide uppercase">
              Color
            </h2>
            <div className="flex gap-4">
              {colorTypes.map((color)=>{
                return (
                  <button key={color}
                  className={`flex items-center justify-center w-8 h-8 rounded-full ring-0 ring-gray ring-offset-2 hover:ring-2 ${color}`}
                  type="button"
                  data-color={color}
                >
                  <svg
                    className="stroke-current text-darkestblue"
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
                )
              })}

            </div>
          </div>
        </div>
      </form>
      <footer className="-mb-8 text-center">
        <button
          className="px-8 py-2 text-white transition-colors duration-200 ease-in-out rounded-full bg-coral hover:bg-red-300 "
          data-qa="apply-btn"
          type="button"
        >
          Apply
        </button>
      </footer>
    </>
  );
};

export default SettingForm;
