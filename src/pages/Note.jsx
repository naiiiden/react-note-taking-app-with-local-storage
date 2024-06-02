import { useNavigate } from "react-router-dom";

export const Note = () => {
  const navigate = useNavigate();
  // https://dev.to/devmdmamun/create-contextual-modal-navigation-with-react-router-v6-28k2
  
  return (
    <div className="note-modal h-40 w-40 fixed top-1/2 left-1/2 bg-red-500">
      <h3>Note</h3>
      <button onClick={() => navigate(-1)}>XXX</button>
    </div>
  );
};
