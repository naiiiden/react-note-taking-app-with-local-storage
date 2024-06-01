import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { NotesContext } from "../context/NotesContext"

const SingleNote = () => {
    const [updateNote, setUpdateNote] = useState({ title: "", body: "" });
    const { notes, setNotes } = useContext(NotesContext);
    const { noteId } = useParams();
    const navigate = useNavigate();

    const currentNote = notes.find((note) => note.id === noteId);

    const deleteNote = () => {
        setNotes(notes.filter((item) => item.id !== noteId));
        navigate(-1);
    }

    const handleUpdateNote = (e) => {
        e.preventDefault();

        console.log("asd");
    }

    console.log(updateNote);

    if (!currentNote) {
        return <p>note doesn't exist</p>
    }

    return (
        <main>
            <p>title: {currentNote.title}</p>
            <p>body: {currentNote.body}</p>
            <button onClick={deleteNote}>delete note</button>
            <button role="link" onClick={() => navigate(-1)}>go back</button>
            <h2>update note:</h2>
            <form onSubmit={handleUpdateNote}>
                <input 
                    onInput={(e) => setUpdateNote({...updateNote, title: e.target.value})} 
                    id="update-note-title" type="text"/>
                <textarea 
                    onInput={(e) => setUpdateNote({...updateNote, body: e.target.value})} 
                    id="update-note-body"></textarea>
                <input type="submit" value="update note"/>
            </form>
        </main>
    )
}

export default SingleNote