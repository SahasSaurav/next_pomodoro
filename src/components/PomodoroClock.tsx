import { useContext } from "react";
import { TimerContext } from "../context/TimerContext";
import { convertInMinute, convertInSecond, formatTime } from "../utils/time";

const PomodoroClock = () => {
  const {time,start,toggleTimer} =useContext(TimerContext);
  return (
    <button onClick={()=>toggleTimer(start)}
      className="relative flex flex-shrink-0 mx-auto transition-shadow duration-150 ease-in-out rounded-full bg-darkestblue sm:w-96 sm:h-96 w-72 h-72 h shadow-lightwithinset hover:shadow-light active:shadow-lightwithinset focus:outline-none focus:ring-4 ring-opacity-60 ring-lightblue "
      style={{
        borderRadius: "50%",
      }}
    >
      <svg
        id="time-progress"
        viewBox="0 0 100 100"
        className="fill-current text-gray z-100 absolute top-0"
      >
        <circle
          className="fill-current text-darkestblue"
          cx="50"
          cy="50"
          r="48"
        ></circle>
        <circle
          className="duration-500 ease-linear origin-center transform -rotate-90 stroke-current transition-stroke-dashoffset"
          style={{ color: "var(--accent-clr)" }}
          cx="50"
          cy="50"
          r="44"
          data-qa="progress"
          fill="none"
          strokeDasharray="276.5 276.5"
          strokeLinecap="round"
          strokeWidth="3"
          //  strokeDashoffset="276.5 - durationToPercents(timerDuration, settings.durations[activeAction]) / 100 * 276.5"
        ></circle>
        <text
          className="fill-current text-lighblue font-bold"
          style={{ fontFamily: "var(--accent-font)" }}
          fontSize="150%"
          textAnchor="middle"
          x="50%"
          y="50%"
          dy=".3em"
        >
          {convertInMinute(time)}:{formatTime(convertInSecond(time))}
        </text>
        <text
          className="font-bold tracking-widest uppercase fill-current"
          style={{ fontFamily: "var(--accent-font)" }}
          fontSize="30%"
          textAnchor="middle"
          x="50%"
          y="70%"
        >
         {start?'STOP':'START'}
        </text>
      </svg>
    </button>
  );
};

export default PomodoroClock;
