/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const NotesContext = createContext();

const dummyNotes = [
  {
    title: "First Note",
    body: "This is the body of the first note. This is the body of the first note.This is the body of the first note. This is the body of the first note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Second Note",
    body: "This is the body of the second note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Third Note",
    body: "This is the body of the third note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Fourth Note",
    body: "This is the body of the fourth note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Fifth Note",
    body: "This is the body of the fifth note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Sixth Note",
    body: "This is the body of the sixth note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Seventh Note",
    body: "This is the body of the seventh note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Eighth Note",
    body: "This is the body of the eighth note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Ninth Note",
    body: "This is the body of the ninth note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Tenth Note",
    body: "This is the body of the tenth note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Eleventh Note",
    body: "This is the body of the eleventh note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Twelfth Note",
    body: "This is the body of the twelfth note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Thirteenth Note",
    body: "This is the body of the thirteenth note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Fourteenth Note",
    body: "This is the body of the fourteenth note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Fifteenth Note",
    body: "This is the body of the fifteenth note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Sixteenth Note",
    body: "This is the body of the sixteenth note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Seventeenth Note",
    body: "This is the body of the seventeenth note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Eighteenth Note",
    body: "This is the body of the eighteenth note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Nineteenth Note",
    body: "This is the body of the nineteenth note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Twentieth Note",
    body: "This is the body of the twentieth note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Twenty-first Note",
    body: "This is the body of the twenty-first note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Twenty-second Note",
    body: "This is the body of the twenty-second note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Twenty-third Note",
    body: "This is the body of the twenty-third note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Twenty-fourth Note",
    body: "This is the body of the twenty-fourth note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Twenty-fifth Note",
    body: "This is the body of the twenty-fifth note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Twenty-sixth Note",
    body: "This is the body of the twenty-sixth note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Twenty-seventh Note",
    body: "This is the body of the twenty-seventh note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Twenty-eighth Note",
    body: "This is the body of the twenty-eighth note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Twenty-ninth Note",
    body: "This is the body of the twenty-ninth note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Thirtieth Note",
    body: "This is the body of the thirtieth note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Thirty-first Note",
    body: "This is the body of the thirty-first note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Thirty-second Note",
    body: "This is the body of the thirty-second note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Thirty-third Note",
    body: "This is the body of the thirty-third note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Thirty-fourth Note",
    body: "This is the body of the thirty-fourth note.",
    id: crypto.randomUUID(),
  },
  {
    title: "Thirty-fifth Note",
    body: "This is the body of the thirty-fifth note.",
    id: crypto.randomUUID(),
  },
];

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("noteTakingApp");
    // const initialValue = JSON.parse(savedNotes);
    // return initialValue || [];
    return savedNotes ? JSON.parse(savedNotes) : dummyNotes;
  });

  useEffect(() => {
    // https://blog.logrocket.com/using-localstorage-react-hooks/
    localStorage.setItem("noteTakingApp", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      {children}
    </NotesContext.Provider>
  );
};
