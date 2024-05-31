/* eslint-disable react/prop-types */
import { useContext } from "react"
import { NotesContext } from "../context/NotesContext"
import { Link } from "react-router-dom";

const NoteList = () => {
  const { notes } = useContext(NotesContext);
  
  return (
    notes.length > 0 && 
      <ul>
        {notes.map((item) => (
          <li key={item.id}>
            <Link to={`/note/${item.id}`}>
              title: {item.title}, body: {item.body}
            </Link>
          </li>
        ))}
      </ul>
  )  
}

export default NoteList