import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { NotesContext } from "../context/NotesContext"

const SingleNote = () => {
    const { notes, setNotes } = useContext(NotesContext);
    const { noteId } = useParams();
    const navigate = useNavigate();

    // console.log("noteId", noteId);
    // console.log('notes from singlenote page', notes);

    const currentNote = notes.find((note) => note.id === noteId);
    console.log("currentNote", currentNote);

    const deleteNote = () => {
        setNotes(notes.filter((item) => item.id !== noteId));
        navigate("/");
    }

    if (!currentNote) {
        return <p>note doesn't exist</p>
    }

    return (
        <main>
            <p>title: {currentNote.title}</p>
            <p>body: {currentNote.body}</p>
            <button onClick={deleteNote}>delete note</button>
        </main>
    )
}

export default SingleNote