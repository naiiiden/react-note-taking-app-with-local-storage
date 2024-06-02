import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { NotesContext } from "../context/NotesContext"
import NoteForm from "../components/NoteForm";

const SingleNote = () => {
    const { notes, setNotes } = useContext(NotesContext);
    const { noteId } = useParams();
    const navigate = useNavigate();
    
    const currentNote = notes.find((note) => note.id === noteId);
    const [updateNote, setUpdateNote] = useState({ title: currentNote.title, body: currentNote.body });
    
    const deleteNote = () => {
        setNotes(notes.filter((item) => item.id !== noteId));
        navigate(-1);
    }

    const handleUpdateNote = (e) => {
        e.preventDefault();
        setNotes(notes.map((note) => note.id === noteId ? { ...note, title: updateNote.title, body: updateNote.body } : note));
    }

    console.log(updateNote);

    if (!currentNote) {
        return <p>note doesn&apos;`t exist</p>
    }

    return (
        <main>
            <p>title: {currentNote.title}</p>
            <p>body: {currentNote.body}</p>
            <button onClick={deleteNote}>delete note</button>
            <button role="link" onClick={() => navigate(-1)}>go back</button>
            <h2>update note:</h2>
            <NoteForm
                handleFormSubmit={handleUpdateNote}
                note={updateNote}
                setNote={setUpdateNote}
                submitText={"update note"}
            />
        </main>
    )
}

export default SingleNote