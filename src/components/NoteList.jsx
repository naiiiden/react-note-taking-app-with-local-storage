/* eslint-disable react/prop-types */
import { useContext } from "react"
import { NotesContext } from "../context/NotesContext"

const NoteList = () => {
  const { notes } = useContext(NotesContext);
  
  return (
    notes.length > 0 && 
      <ul>
        {notes.map((item) => (
          <li key={item.id}>title: {item.title}, body: {item.body}</li>
        ))}
      </ul>
  )  
}

export default NoteList