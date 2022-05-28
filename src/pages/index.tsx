import type { NextPage } from "next";
import Head from "next/head";
import PomodoroMenu from "@components/PomodoroMenu";
import PomodoroClock from "@components/PomodoroClock";
import SettingButton from "@components/SettingButton";
import Modal from "@components/Modal";
import Setting from "@components/Setting";
import Portals from "@components/Portals";
import useIsOnline from "@hooks/useIsOnline";

const Home: NextPage = () => {
	const online = useIsOnline();

	return (
		<>
			<Head>
				<title>Pomodoro Clock</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta
					name="description"
					content="The pomodoro clock for efficient time management for studing"
				/>
			</Head>
			<div className="container mx-auto p-4 flex flex-col justify-between items-center h-screen">
				<div className={`text-white text-xl absolute right-5 top-2 ${online ? "hidden" : "block"}`}>
					App is offline now
				</div>
				<div>
					<h1 className="text-lightblue text-4xl text-center mt-8 mb-10 text-logo font-bold">
						pomodoro
					</h1>
					<PomodoroMenu />
				</div>
				<article className="flex justify-center items-center h-full my-10 ">
					<PomodoroClock />
				</article>
				<SettingButton />
				<Portals selector="#portals">
					<Modal>
						<Setting />
					</Modal>
				</Portals>
			</div>
		</>
	);
};

export default Home;
