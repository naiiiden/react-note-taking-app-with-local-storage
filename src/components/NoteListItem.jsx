/* eslint-disable react/prop-types */
const NoteListItem = ({ item }) => {
  return (
    <li>title: {item.title}, body: {item.body}</li>
  )
}

export default NoteListItem