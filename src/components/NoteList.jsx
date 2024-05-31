import { useContext, useState } from "react";
import { NotesContext } from "../context/NotesContext";
import { Link } from "react-router-dom";

const NoteList = () => {
  const { notes } = useContext(NotesContext);
  const [currentPage, setCurrentPage] = useState(1);
  const notesPerPage = 5;

  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = notes.slice(indexOfFirstNote, indexOfLastNote);

  const totalPages = Math.ceil(notes.length / notesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    notes.length > 0 &&
    <>
      <ul>
        {currentNotes.map((item) => (
          <li key={item.id}>
            <Link to={`/note/${item.id}`}>
              title: {item.title}, body: {item.body}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>previous</button>
      <p>page {currentPage} of {totalPages}</p>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>next</button>
    </>
  )
};

export default NoteList;
