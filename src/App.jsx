import { Route, Routes } from "react-router-dom";
import NewNote from "./components/NewNote";
import NoteList from "./components/NoteList";
import { NotesProvider } from "./context/NotesContext";
import SingleNote from "./pages/SingleNote";

function App() {
  return (
    <NotesProvider>
      <div className="">
        <main>
          <h1 className="bg-red-500">Note taking application with local storage</h1>
          <NewNote/>
          <Routes>
            <Route path="/" element={
              <>
                <NoteList/>
              </>
            }/>
            <Route path="/note/:noteId" element={<SingleNote/>}/>  
          </Routes>
        </main>
      </div>
    </NotesProvider>
  )
}

export default App
