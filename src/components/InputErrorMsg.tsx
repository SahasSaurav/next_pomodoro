import { memo } from "react";

const InputErrorMsg: React.FC = () => {
	return (
		<div className="flex mt-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="24"
				height="24"
				className="fill-coral  mr-2"
			>
				<path
					fillRule="evenodd"
					d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm8.036-4.024a.75.75 0 00-1.06 1.06L10.939 12l-2.963 2.963a.75.75 0 101.06 1.06L12 13.06l2.963 2.964a.75.75 0 001.061-1.06L13.061 12l2.963-2.964a.75.75 0 10-1.06-1.06L12 10.939 9.036 7.976z"
				></path>
			</svg>
			<p className="text-coral font-semibold text-base">
				Make sure that timer duration is between 1 and 60 minutes!
			</p>
		</div>
	);
};

export default memo(InputErrorMsg);
