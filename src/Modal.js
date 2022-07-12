import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elementRef = useRef(null); //getting the same EXACT thing in each render

  if (!elementRef.current) {
    elementRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.querySelector("#modal");
    modalRoot.appendChild(elementRef.current);

    //activates when Modal goes away. This is the cleanup function.
    return () => modalRoot.removeChild(elementRef.current);
  }, []); //[] means do this at the first render and not every render. Just make it once.

  return createPortal(<div>{children}</div>, elementRef.current);
};

export default Modal;
