const PomodoroMenu = () => {
  const menuList = ["pomodoro", "short break", "long break"];
  return (
    <div className="grid max-w-sm grid-cols-3 gap-2 p-2 bg-darkblue text-white rounded-3xl  ">
      {menuList.map((item) => {
        return (
          <button key={item} data-item={item} aria-label={`click to go ${item} section`} className="py-2 px-4 text-sm font-bold transition-colors ease-in-out rounded-full focus:outline-none focus:ring-4 ring-lightblue ring-opacity-60 active ">
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default PomodoroMenu;
