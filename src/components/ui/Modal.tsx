import { createPortal } from "react-dom";
import cn from "../../utils/cn";
import {  MouseEvent, createContext, useContext, useRef } from "react";
// type 
type TModalContext = {
  onClose: ()=> void
}
type TModal = {
  isOpen:boolean
  onClose: ()=> void
  children?: React.ReactNode
}
type TClose = {
  children?: React.ReactNode
}
type THeader = TClose
// context 
const ModalContext = createContext<TModalContext | null>(null)
// modal main dunction 
const Modal = ({isOpen,onClose,children}:TModal) => {

    const containerRef = useRef<HTMLDivElement>(null)
    const handleOutClose = (e:MouseEvent) => {
     console.log(containerRef.current);
      if(!containerRef.current?.contains(e.target as Node)){
        onClose()
      }
    }

  return createPortal (
   <ModalContext.Provider value={{onClose}}>
    <div className={cn("fixed inset-0 flex justify-center items-center bg-gray-500/70 invisible  ", {
             visible: isOpen
    })} onClick={handleOutClose} >
      <div ref={containerRef} className="bg-white w-full max-w-sm rounded-md p-4">
        {children}
      </div>
    </div>
   </ModalContext.Provider>, document.getElementById('portal') as Element 
  ); 
};

// compund components 
const CloseButton = ({children}:TClose)=>{
  const {onClose} = useContext(ModalContext) as TModalContext
    return <button className="ml-auto" onClick={ onClose} title="Close Modal">
      
     {children ? children : ( <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 bg-red-500 text-white font-semibold rounded-md p-.5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>)}
       </button>
}
const Header = ({children}:THeader)=>{
  return <div className="flex w-full justify-between items-center mb-3">{children}</div>
}
Modal.Header = Header
Modal.CloseButton = CloseButton

export default Modal;