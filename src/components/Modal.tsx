import { memo, useContext, useEffect, useState } from "react";
import { TimerContext } from "@context/TimerContext";

import type { ChildrenProps } from "@state/themeType";
import type { TimerContextType } from "@state/timerType";

const Modal: React.FC<ChildrenProps> = ({ children }) => {
	const { isOpen } = useContext(TimerContext) as TimerContextType;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [mounted, setMounted] = useState<boolean>(false);
	const [height, setHeight] = useState<number>(0);

	useEffect(() => {
		setMounted(true);
		setHeight(innerHeight);
	}, []);

	useEffect(() => {
		setHeight(innerHeight + scrollY);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [innerHeight, scrollY]);

	return (
		// {modal overlay}
		<div
			className={`${
				isOpen ? "flex" : "hidden"
			} absolute w-full top-0 left-0  bg-white bg-opacity-5 overflow-x-hidden overflow-visible justify-center items-center z-20`}
			style={{ height: height, backdropFilter: "blur(.2rem)" }}
		>
			{/* {modal Body} */}
			<div className="z-50 w-11/12 p-8 pt-0 pb-4 mx-auto bg-white shadow-lg md:max-w-md rounded-xl transform -translate-y-4  ">
				{children}
			</div>
		</div>
	);
};

export default memo(Modal);
