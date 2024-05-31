/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem("noteTakingApp");
        // const initialValue = JSON.parse(savedNotes);
        // return initialValue || [];
        return savedNotes ? JSON.parse(savedNotes) : [];
    });

    useEffect(() => {
        // https://blog.logrocket.com/using-localstorage-react-hooks/
        localStorage.setItem("noteTakingApp", JSON.stringify(notes));
    }, [notes]);

    return (
        <NotesContext.Provider value={{ notes, setNotes }}>
            {children}
        </NotesContext.Provider>
    )
}