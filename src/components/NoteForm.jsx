import { useState, useContext } from "react"
import { NotesContext } from "../context/NotesContext"

const NoteForm = () => {
  const { notes, setNotes } = useContext(NotesContext);
  const [addNewNote, setAddNewNote] = useState({ title: '', body: '' });
  
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
    <form onSubmit={handleNewNoteSubmit}>
      <label htmlFor="note-title">
        <span>Note title:</span>
        <input 
          onInput={(e) => setAddNewNote({...addNewNote, title: e.target.value})} value={addNewNote.title} 
          id="note-title" type="text" placeholder="note title"/>
      </label>
      <label htmlFor="note-body">
        <span>Note body:</span>
        <textarea 
          onInput={(e) => setAddNewNote({...addNewNote, body: e.target.value})} value={addNewNote.body} 
          id="note-body" placeholder="note body"></textarea>
      </label>
      <input id="note-submit" type="submit" value="add note"/>
    </form>
  )
}

export default NoteForm