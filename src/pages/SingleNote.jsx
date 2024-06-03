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
    <div className={`${triggerCloseAnim ? "note-modal-close" : ""} note-modal rounded-lg z-30 w-11/12 max-w-xl fixed top-1/2 left-1/2 bg-gray-800 transform -translate-x-1/2 -translate-y-1/2`}>
      <div className="p-4">
        <button className="w-full leading-none text-end text-2xl font-bold" onClick={() => (setTriggerCloseAnim(true), setTimeout(() => navigate(-1), 200))} aria-label="Close note">✕</button>
        <h3 className="w-11/12 font-medium text-xl md:text-2xl mb-4">{currentNote.title}</h3>
        <p className="mb-4">{currentNote.body}</p>
        <button className="bg-red-600 p-1 rounded-lg" onClick={deleteNote}>Delete Note</button>
      </div>
      <NoteForm
        handleFormSubmit={handleUpdateNote}
        formTitle={"Update note"}
        note={updateNote}
        setNote={setUpdateNote}
        submitText={"Update Note"}
      />
    </div>
    </>
  );
};

export default SingleNote;