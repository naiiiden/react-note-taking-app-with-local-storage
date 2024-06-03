/* eslint-disable react/prop-types */
const NoteForm = ({ className, handleFormSubmit, inert, formTitle, note, setNote, submitText }) => {
  return (
    <form className={className} onSubmit={handleFormSubmit} {...(inert ? { inert: "inert" } : {})}>
        {/* We conditionally spread the inert attribute if it's true using {...(inert ? { inert: "inert" } : {})}. 
         This syntax dynamically adds the inert attribute if the inert prop is true, 
         making the form and its children non-interactive. */}
        <h2 className="bg-red-600 rounded-t-lg px-4 py-1 text-center text-lg">{formTitle}</h2>
        <div className="p-4 grid gap-4">
          <label className="grid gap-[.125rem]" htmlFor="note-title">
            <span className="ml-1">Title:</span>
            <input 
              className="p-1 rounded-md bg-gray-700 "
              onInput={(e) => setNote({...note, title: e.target.value})} 
              value={note.title} 
              id="note-title" type="text"
              placeholder="write your title here..."
            />
          </label>
          <label className="grid gap-[.125rem]" htmlFor="note-body">
            <span className="ml-1">Body:</span>
            <textarea 
              className="p-1 rounded-md bg-gray-700 h-60 max-h-60 resize-none"
              onInput={(e) => setNote({...note, body: e.target.value})} 
              value={note.body} 
              id="note-body"
              placeholder="and the content of your note goes here..."
            >
            </textarea>
          </label>
          <input className="bg-red-600 rounded-lg p-1 mt-4" id="note-submit" type="submit" value={submitText}/>
        </div>
    </form>
  )
}

export default NoteForm