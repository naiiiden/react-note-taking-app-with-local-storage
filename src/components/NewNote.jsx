import { useState, useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import NoteForm from "./NoteForm";

const NewNote = () => {
  const { notes, setNotes } = useContext(NotesContext);
  const [addNewNote, setAddNewNote] = useState({ title: "", body: "" });
  const [openNewNoteForm, setOpenNewNoteForm] = useState(false);

  const handleNewNoteSubmit = (e) => {
    e.preventDefault();
    if (addNewNote.title === "") {
      console.error("Note title can't be empty");
    } else {
      setNotes([...notes, { ...addNewNote, id: crypto.randomUUID() }]);
      setAddNewNote({ title: "", body: "" });
    }
  };

  return (
    <>
      {openNewNoteForm && (
        <div
          onClick={() => setOpenNewNoteForm(!openNewNoteForm)}
          className="fixed z-20 inset-0 bg-black/40 backdrop-blur-[1px]"
        ></div>
      )}
      <button
        onClick={() => setOpenNewNoteForm(!openNewNoteForm)}
        className="fixed bottom-4 right-0 left-0 mx-auto text-5xl font-light shadow-2xl bg-red-600 rounded-full w-16 h-16 grid place-content-center"
        aria-label="Add a new note"
      >
        +
      </button>
      <NoteForm
        closeBtnOnClick={() => setOpenNewNoteForm(!openNewNoteForm)}
        inert={!openNewNoteForm}
        className={`${
          openNewNoteForm ? "scale-y-100 scale-x-100" : "scale-y-0 scale-x-0"
        } w-11/12 max-w-xl z-20 bg-gray-800 shadow-2xl rounded-lg transition-all origin-bottom fixed bottom-40 left-0 right-0 mx-auto`}
        handleFormSubmit={handleNewNoteSubmit}
        formTitle={"Add a new note"}
        note={addNewNote}
        setNote={setAddNewNote}
        submitText={"Add note"}
      />
    </>
  );
};

export default NewNote;
