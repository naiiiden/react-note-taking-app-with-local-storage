import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { NotesContext } from "../context/NotesContext"

const SingleNote = () => {
    const { notes, setNotes } = useContext(NotesContext);
    const { noteId } = useParams();
    const navigate = useNavigate();

    // console.log("noteId", noteId);
    // console.log('notes from singlenote page', notes);

    const currentBlog = notes.find((blog) => blog.id === noteId);
    console.log("currentBlog", currentBlog);

    const deleteNote = () => {
        setNotes(notes.filter((item) => item.id !== noteId));
        navigate("/");
    }

    return (
        <main>
            <p>title: {currentBlog.title}</p>
            <p>body: {currentBlog.body}</p>
            <button onClick={deleteNote}>delete note</button>
        </main>
    )
}

export default SingleNote