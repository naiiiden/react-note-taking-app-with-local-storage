import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import { NotesProvider } from "./context/NotesContext";

function App() {
  return (
    <NotesProvider>
      <main>
        <h1>Note taking application with local storage</h1>
        <NoteForm/>
        <NoteList/>
      </main>
    </NotesProvider>
  )
}

export default App
