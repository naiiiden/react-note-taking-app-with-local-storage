import { Route, Routes } from "react-router-dom";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import { NotesProvider } from "./context/NotesContext";
import SingleNote from "./pages/SingleNote";

function App() {
  return (
    <NotesProvider>
      <main>
        <h1>Note taking application with local storage</h1>
        <Routes>
          <Route path="/" element={
            <>
              <NoteForm/>
              <NoteList/>
            </>
          }/>
          <Route path="/note/:noteId" element={<SingleNote/>}/>  
        </Routes>
      </main>
    </NotesProvider>
  )
}

export default App
