import { useState, useEffect } from "react";

const getOnLineStatus = () =>
	typeof navigator !== "undefined" && typeof navigator.onLine === "boolean"
		? navigator.onLine
		: true;

const useIsOnline = () => {
	const [status, setStatus] = useState<undefined | boolean>(getOnLineStatus());

	const setOnline = () => setStatus(true);
	const setOffline = () => setStatus(false);

	useEffect(() => {
		window.addEventListener("online", setOnline);
		window.addEventListener("offline", setOffline);

		return () => {
			window.removeEventListener("online", setOnline);
			window.removeEventListener("offline", setOffline);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [getOnLineStatus]);

	return status;
};

export default useIsOnline;
