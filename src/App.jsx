import NoteForm from "./components/NoteForm";
import { NotesProvider } from "./context/NotesContext";

function App() {
  return (
    <NotesProvider>
      <main>
        <h1>Note taking application with local storage</h1>
        <NoteForm/>
      </main>
    </NotesProvider>
  )
}

export default App
