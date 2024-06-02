import { Route, Routes } from "react-router-dom";
import NewNote from "./components/NewNote";
import NoteList from "./components/NoteList";
import { NotesProvider } from "./context/NotesContext";
import SingleNote from "./pages/SingleNote";

function App() {
  return (
    <NotesProvider>
      <div className="bg-gray-900 text-white min-h-screen">
        <main>
          <h1 className="bg-red-600 lg:text-xl">
            <span className="px-4 py-2 max-w-7xl mx-auto block">Note taking application with local storage</span>
          </h1>
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
