import { useState, useEffect } from "react"
import NoteListItem from "./components/NoteListItem";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("noteTakingApp");
    // const initialValue = JSON.parse(savedNotes);
    // return initialValue || [];
    return savedNotes ? JSON.parse(savedNotes) : [];

  });
  const [addNewNote, setAddNewNote] = useState({
    "title": "",
    "body": "",
  });

  console.log(addNewNote);

  useEffect(() => {
    // https://blog.logrocket.com/using-localstorage-react-hooks/
    localStorage.setItem("noteTakingApp", JSON.stringify(notes));
  }, [notes]);

  const handleNewNoteSubmit = (e) => {
    e.preventDefault();

    if (addNewNote.title === "") {
      console.error("note title can't be empty");
    } else {
      setNotes((prevNotes) => [...prevNotes, { title: addNewNote.title, body: addNewNote.body, id: crypto.randomUUID() }]);
      console.log('notes after submit', notes);
      setAddNewNote({ title: "", body: "" });
    }
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
      {notes.length > 0 && 
        <ul>
          {notes.map((item) => (
            <NoteListItem key={item.id} item={item}/>
          ))}
        </ul>
      }
    </main>
  )
}

export default App
