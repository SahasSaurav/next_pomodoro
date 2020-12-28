import Head from "next/head";
import PomodoroMenu from "../components/PomodoroMenu";
import PomodoroClock from "../components/PomodoroClock";
import SettingButton from "../components/SettingButton";
import Modal from "../components/Modal";
import Setting from "../components/Setting";


const Home:React.FC = () => {
  return (
    <>
      <Head>
        <title>Pomodoro Clock</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container mx-auto p-4 flex flex-col justify-between items-center h-screen">
        <div>
        <h1 className="text-lightblue text-4xl text-center mt-8 mb-10 text-logo font-bold">
          pomodoro
        </h1>
        <PomodoroMenu />
        </div>
        <article className="flex justify-center items-center h-f my-10 ">
          <PomodoroClock />
        </article>
       <SettingButton />
       <Modal>
         <Setting />
       </Modal>

      </div>
    </>
  );
};

export default Home;
