import { ChildrenProps } from "../utils/types";

const Modal:React.FC<ChildrenProps>= ({ children }) => {
  return (
    // {modal overlay}
    <div
      className={`hidden absolute inset-0 bg-white bg-opacity-5  overflow-x-hidden overflow-y-visible h-full w-full  justify-center items-center`}
    >
      {/* {modal Body} */}
      <div className="z-50 w-11/12 p-8 pt-0 pb-4 mx-auto bg-white shadow-lg md:max-w-md rounded-xl  ">
        {children}
      </div>
    </div>
  );
};

export default Modal;
