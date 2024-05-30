function App() {

  return (
    <main>
      <h1>Note taking application with local storage</h1>
      <form>
        <label htmlFor="note-title">
          <span>Note title:</span>
          <input id="note-title" type="text" placeholder="note title"/>
        </label>
        <label htmlFor="note-body">
          <span>Note body:</span>
          <textarea id="note-body" type="text" placeholder="note body"></textarea>
        </label>
        <input id="note-submit" type="submit" value="add note"/>
      </form>
    </main>
  )
}

export default App
