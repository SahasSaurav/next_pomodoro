import { useContext,useEffect,useState} from "react";
import { TimerContext } from "../context/TimerContext";
import { ChildrenProps } from "../types/Themetype";
import { TimerContextType } from "../types/TimerTypes";

const Modal: React.FC<ChildrenProps> = ({ children }) => {
  const { isOpen, closeModal } = useContext(TimerContext) as TimerContextType;

  const [mounted,setMounted]=useState<boolean>(false)
  const [height,setHeight]=useState<number>(null)

  useEffect(()=>{
    setMounted(true)
    setHeight(innerHeight)
  },[])

  useEffect(() => {
    setHeight(innerHeight+scrollY)
  }, [scrollY])

  return (
    // {modal overlay}
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } absolute w-full top-0 left-0  bg-white bg-opacity-5 overflow-x-hidden overflow-visible justify-center items-center z-20`}
      style={{height:height}}
    >
      {/* {modal Body} */}
      <div className="z-50 w-11/12 p-8 pt-0 pb-4 mx-auto bg-white shadow-lg md:max-w-md rounded-xl transform -translate-y-4  ">
        {children}
      </div>
    </div>
  );
};

export default Modal;
