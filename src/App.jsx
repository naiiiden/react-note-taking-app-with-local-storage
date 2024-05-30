import { useState } from "react"

function App() {
  const [notes, setNotes] = useState([]);
  const [addNewNote, setAddNewNote] = useState({
    "title": "",
    "body": "",
  });

  console.log(addNewNote);

  const handleNewNoteSubmit = (e) => {
    e.preventDefault();
    
    setNotes((prevNotes) => [...prevNotes, addNewNote]);
    console.log('notes after submit', notes);
    setAddNewNote({ title: "", body: "" })
  }

  return (
    <main>
      <h1>Note taking application with local storage</h1>
      <form onSubmit={handleNewNoteSubmit}>
        <label htmlFor="note-title">
          <span>Note title:</span>
          <input onInput={(e) => setAddNewNote({...addNewNote, title: e.target.value})} value={addNewNote.title} id="note-title" type="text" placeholder="note title"/>
        </label>
        <label htmlFor="note-body">
          <span>Note body:</span>
          <textarea onInput={(e) => setAddNewNote({...addNewNote, body: e.target.value})} value={addNewNote.body} id="note-body" type="text" placeholder="note body"></textarea>
        </label>
        <input id="note-submit" type="submit" value="add note"/>
      </form>
    </main>
  )
}

export default App
