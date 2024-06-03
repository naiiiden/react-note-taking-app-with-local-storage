import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Note = () => {
  // https://dev.to/devmdmamun/create-contextual-modal-navigation-with-react-router-v6-28k2
  const navigate = useNavigate();
  const [triggerCloseAnim, setTriggerCloseAnim] = useState(false);
  
  return (
    <div className={`${triggerCloseAnim ? "note-modal-close" : ""} note-modal h-40 w-40 fixed top-1/2 left-1/2 bg-red-500`}>
      <h3>Note</h3>
      <button onClick={() => (setTriggerCloseAnim(true), setTimeout(() => navigate(-1), 200))}>XXX</button>
    </div>
  );
};
