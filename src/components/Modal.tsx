import { useContext } from "react";
import { TimerContext } from "../context/TimerContext";
import { ChildrenProps } from "../types/Themetype";

const Modal: React.FC<ChildrenProps> = ({ children }) => {
  const { isOpen, closeModal } = useContext(TimerContext);

  return (
    // {modal overlay}
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } absolute w-full h-full top-0 left-0  bg-white bg-opacity-5  overflow-x-hidden overflow-y-visible justify-center items-center z-20`}
    >
      {/* {modal Body} */}
      <div className="z-50 w-11/12 p-8 pt-0 pb-4 mx-auto bg-white shadow-lg md:max-w-md rounded-xl transform -translate-y-4  ">
        {children}
      </div>
    </div>
  );
};

export default Modal;
