import { useContext } from "react"
import { useParams } from "react-router-dom"
import { NotesContext } from "../context/NotesContext"

const SingleNote = () => {
    const { notes } = useContext(NotesContext);
    const { noteId } = useParams();

    // console.log("noteId", noteId);
    // console.log('notes from singlenote page', notes);

    const currentBlog = notes.find((blog) => blog.id === noteId);
    console.log("currentBlog", currentBlog);

    return (
        <main>
            <p>title: {currentBlog.title}</p>
            <p>body: {currentBlog.body}</p>
        </main>
    )
}

export default SingleNote