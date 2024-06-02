import { useState, useContext } from "react"
import { NotesContext } from "../context/NotesContext"
import NoteForm from "./NoteForm";

const NewNote = () => {
  const { notes, setNotes } = useContext(NotesContext);
  const [addNewNote, setAddNewNote] = useState({ title: '', body: '' });
  const [openNewNoteForm, setOpenNewNoteForm] = useState(false);
  
  const handleNewNoteSubmit = (e) => {
    e.preventDefault();
    if (addNewNote.title === '') {
      console.error("Note title can't be empty");
    } else {
      setNotes([...notes, { ...addNewNote, id: crypto.randomUUID() }]);
      setAddNewNote({ title: '', body: '' });
    }
  };

  return (
    <>
      <button onClick={() => setOpenNewNoteForm(!openNewNoteForm)} className="fixed bottom-4 right-0 left-0 mx-auto text-5xl font-light shadow-2xl bg-red-500 rounded-full w-16 h-16 grid place-content-center" aria-label="Add a new note">+</button>
      <NoteForm
        className={`${openNewNoteForm ? 'scale-y-100 scale-x-100' : 'scale-y-0 scale-x-0'} transition-all origin-bottom fixed bottom-28 left-0 right-0 w-fit mx-auto border p-4 grid`}
        handleFormSubmit={handleNewNoteSubmit}
        note={addNewNote}
        setNote={setAddNewNote}
        submitText={"add note"}
      />
    </>
  )
}

export default NewNote