const convertInMinute: (time: number) => number = (time) => {
	return Math.floor(time / 60);
};

const convertInSecond: (time: number) => number = (time) => {
	return time % 60;
};

const formatTime: (time: number) => string = (time) => {
	const timeStr = time.toString();
	return timeStr.length < 2 ? "0" + timeStr : timeStr;
};

export { convertInMinute, convertInSecond, formatTime };
