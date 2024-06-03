import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NotesContext } from "../context/NotesContext";
import NoteForm from "../components/NoteForm";

const SingleNote = () => {
  const { notes, setNotes } = useContext(NotesContext);
  const { noteId } = useParams();
  const navigate = useNavigate();
  const [triggerCloseAnim, setTriggerCloseAnim] = useState(false);


  const currentNote = notes.find((note) => note.id === noteId);
  const [updateNote, setUpdateNote] = useState({ title: "", body: "" });

  useEffect(() => {
    if (currentNote) {
      setUpdateNote({ title: currentNote.title, body: currentNote.body });
    }
  }, [currentNote]);

  const deleteNote = () => {
    setNotes(notes.filter((item) => item.id !== noteId));
  };

  const handleUpdateNote = (e) => {
    e.preventDefault();
    setNotes(notes.map((note) => note.id === noteId ? { ...note, title: updateNote.title, body: updateNote.body } : note));
  };

  if (!currentNote) {
    return <p>Note doesn&apos;t exist</p>;
  }

  return (
    <>
    <div onClick={() => (setTriggerCloseAnim(true), setTimeout(() => navigate(-1), 200))} className="fixed z-20 inset-0 bg-black/40 backdrop-blur-[1px]"></div>
    <div className={`${triggerCloseAnim ? "note-modal-close" : ""} note-modal z-30 h-auto w-auto fixed top-1/2 left-1/2 bg-gray-800 p-4 transform -translate-x-1/2 -translate-y-1/2`}>
      <button onClick={() => (setTriggerCloseAnim(true), setTimeout(() => navigate(-1), 200))}>XXX</button>
      <h3>{currentNote.title}</h3>
      <p>{currentNote.body}</p>
      <button onClick={deleteNote}>Delete Note</button>
      <h2>Update Note:</h2>
      <NoteForm
        handleFormSubmit={handleUpdateNote}
        note={updateNote}
        setNote={setUpdateNote}
        submitText={"Update Note"}
      />
    </div>
    </>
  );
};

export default SingleNote;