import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NotesContext } from "../context/NotesContext";
import NoteForm from "../components/NoteForm";

const SingleNote = () => {
  const { notes, setNotes } = useContext(NotesContext);
  const { noteId } = useParams();
  const navigate = useNavigate();
  const [triggerCloseAnim, setTriggerCloseAnim] = useState(false);
  const [showUpdateNoteForm, setShowUpdateNoteForm] = useState(false);

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

  return (
    <>
      <div onClick={() => (setTriggerCloseAnim(true), setTimeout(() => navigate(-1), 200))} className="fixed z-20 inset-0 bg-black/40 backdrop-blur-[1px]"></div>
      <div className={`${triggerCloseAnim ? "note-modal-close" : ""} overflow-hidden note-modal rounded-lg z-30 w-11/12 max-w-xl fixed top-1/2 left-1/2 bg-gray-800 transform -translate-x-1/2 -translate-y-1/2`}>
        <div className={`${showUpdateNoteForm ? '-translate-x-full' : 'translate-x-0'} transition-all p-4 min-h-[29.5rem] flex flex-col`}>
          <button className="w-full leading-none text-end text-2xl font-bold" onClick={() => (setTriggerCloseAnim(true), setTimeout(() => navigate(-1), 200))} aria-label="Close note">✕</button>
          <h3 className="w-11/12 font-medium text-xl md:text-2xl mb-4">{currentNote.title}</h3>
          <p className="mb-4">{currentNote.body}</p>
          <div className="mt-auto ml-auto">
            <button disabled={showUpdateNoteForm} className="p-1 rounded-lg mr-4" onClick={() => setShowUpdateNoteForm(!showUpdateNoteForm)}>Edit note</button>
            <button disabled={showUpdateNoteForm} className="bg-red-600 p-1 rounded-lg" onClick={deleteNote}>Delete note</button>
          </div>
        </div>
        <NoteForm
          backBtnOnClick={() => setShowUpdateNoteForm(!showUpdateNoteForm)}
          closeBtnOnClick={() => (setTriggerCloseAnim(true), setTimeout(() => navigate(-1), 200))}
          inert={!showUpdateNoteForm}
          className={`${showUpdateNoteForm ? 'translate-x-0' : 'translate-x-full'} transition-all absolute inset-0`}
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