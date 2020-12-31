import {useState,useEffect,useRef} from 'react'
import {createPortal} from 'react-dom'

interface PortalsProps{
  children:React.ReactNode,
  selector:string,
}

const Portals:React.FC<PortalsProps>=({children,selector})=>{
  const ref=useRef(null);
  const [mounted,setMounted]=useState<boolean>(false)
  
  useEffect(()=>{
    ref.current=document.querySelector(selector)
    setMounted(true)
  },[selector])

  return mounted? createPortal(children,ref.current): null 
}


export default Portals;