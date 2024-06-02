/* eslint-disable react/prop-types */
const NoteForm = ({ handleFormSubmit, note, setNote, submitText }) => {
  return (
    <form onSubmit={handleFormSubmit}>
        <label htmlFor="note-title">
          <span>Note title:</span>
          <input 
            onInput={(e) => setNote({...note, title: e.target.value})} 
            value={note.title} 
            id="note-title" type="text" placeholder="note title"/>
        </label>
        <label htmlFor="note-body">
          <span>Note body:</span>
          <textarea 
            onInput={(e) => setNote({...note, body: e.target.value})} 
            value={note.body} 
            id="note-body" placeholder="note body"></textarea>
        </label>
        <input id="note-submit" type="submit" value={submitText}/>
    </form>
  )
}

export default NoteForm