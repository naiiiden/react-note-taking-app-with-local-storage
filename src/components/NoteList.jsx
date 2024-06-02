import { useContext, useEffect, useState } from "react";
import { NotesContext } from "../context/NotesContext";
import { Link, useSearchParams } from "react-router-dom";

const NoteList = () => {
  const { notes } = useContext(NotesContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const notesPerPage = 7;

  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = notes.slice(indexOfFirstNote, indexOfLastNote);

  const totalPages = Math.ceil(notes.length / notesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setSearchParams({ page:currentPage + 1 });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setSearchParams({ page:currentPage - 1 });
    }
  };

  useEffect(() => {
    if (searchParams.get("page") === null) {
      setCurrentPage(1);
    } else {
      setCurrentPage(parseInt(searchParams.get("page")));
    }
  }, [currentPage, searchParams]);

  return (
    notes.length > 0 &&
    <>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 max-w-7xl mx-auto">
        {currentNotes.map((item) => (
          <li className="w-full max-h-64 bg-gray-800 shadow-2xl p-4 rounded-lg" key={item.id}>
            <Link to={`/note/${item.id}`}>
              <h3 className="lg:text-xl mb-4">{item.title}</h3>
              <p className="h-32 lg:text-lg">{item.body.length > 100 ? item.body.slice(0, 65) + '...' : item.body}</p>
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
