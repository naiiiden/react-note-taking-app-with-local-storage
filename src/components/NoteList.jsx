import { useContext, useEffect, useState } from "react";
import { NotesContext } from "../context/NotesContext";
import { Link, useSearchParams } from "react-router-dom";

const NoteList = () => {
  const { notes } = useContext(NotesContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const notesPerPage = 15;

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
    <div className="p-4 max-w-7xl mx-auto">
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {currentNotes.map((item) => (
          <li className="w-full max-h-64 bg-gray-800 shadow-2xl p-4 rounded-lg" key={item.id}>
            <Link to={`/note/${item.id}`}>
              <h3 className="lg:text-xl mb-4">{item.title}</h3>
              <p className="h-32 lg:text-lg">{item.body.length > 100 ? item.body.slice(0, 65) + '...' : item.body}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mb-24 flex items-center justify-center gap-6 fixed bottom-0 mx-auto w-full left-0 z-10">
        <button className="text-4xl" onClick={handlePrevPage} disabled={currentPage === 1} aria-label="Previous page">&lt;</button>
        <p className="text-lg">{currentPage}/{totalPages}</p>
        <button className="text-4xl" onClick={handleNextPage} disabled={currentPage === totalPages} aria-label="Next page">&gt;</button>    
      </div>
    </div>
  )
};

export default NoteList;
