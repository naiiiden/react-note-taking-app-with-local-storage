/* eslint-disable react/prop-types */
const NoteForm = ({
  className,
  handleFormSubmit,
  inert,
  formTitle,
  note,
  setNote,
  submitText,
  backBtnOnClick,
  closeBtnOnClick,
}) => {
  return (
    <form
      className={className}
      onSubmit={handleFormSubmit}
      {...(inert ? { inert: "inert" } : {})}
    >
      {/* We conditionally spread the inert attribute if it's true using {...(inert ? { inert: "inert" } : {})}. 
         This syntax dynamically adds the inert attribute if the inert prop is true, 
         making the form and its children non-interactive. */}
      <div className="bg-red-600 px-4 py-1 rounded-t-lg flex items-center">
        {backBtnOnClick && (
          <button
            className="w-0 pr-5 text-2xl font-bold"
            onClick={backBtnOnClick}
            aria-label="Go back to note"
          >
            ←
          </button>
        )}
        <h2 className="w-full text-center text-lg">{formTitle}</h2>
        {closeBtnOnClick && (
          <button
            className="w-0 pr-3 text-2xl font-bold"
            onClick={closeBtnOnClick}
            aria-label="Close note"
          >
            x
          </button>
        )}
      </div>
      <div className="p-4 grid gap-4">
        <label className="grid gap-[.125rem]" htmlFor="note-title">
          <span className="ml-1">Title:</span>
          <input
            className="py-1 px-2 rounded-md bg-gray-700"
            required
            onInput={(e) => setNote({ ...note, title: e.target.value })}
            value={note.title}
            id="note-title"
            type="text"
            placeholder="write your title here..."
          />
        </label>
        <label className="grid gap-[.125rem]" htmlFor="note-body">
          <span className="ml-1">Body:</span>
          <textarea
            className="py-1 px-2 rounded-md bg-gray-700 h-60 max-h-60 resize-none"
            required
            onInput={(e) => setNote({ ...note, body: e.target.value })}
            value={note.body}
            id="note-body"
            placeholder="and the content of your note goes here..."
          ></textarea>
        </label>
        <input
          className="bg-red-600 rounded-lg p-1 mt-4"
          id="note-submit"
          type="submit"
          value={submitText}
        />
      </div>
    </form>
  );
};

export default NoteForm;
