import { useState, lazy, Suspense, useEffect } from "react";
import Add from "../../components/button/Add";
const Form = lazy(() => import("../../components/form/Form"));
import "./Note.css";
import { motion } from "framer-motion";
import {
  IoCloseCircleOutline,
  IoCreateOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";

function Note() {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState(null);
  const [noteValues, setNoteValues] = useState({});

  useEffect(() => {
    const initialValues = {};
    notes.forEach((note) => {
      initialValues[note.title] = note.body;
    });
    setNoteValues(initialValues);
  }, [notes]);

  useEffect(() => {
    const data = window.localStorage.getItem("myNotes");
    if (data !== null) setNotes(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("myNotes", JSON.stringify(notes));
  }, [notes]);

  function handleOpen() {
    setOpen(!open);
  }

  const addNote = (newNote) => {
    const existingNote = notes.find((note) => note.title === newNote.title);
    if (existingNote) {
      alert("A note with this title already exists");
      return;
    }
    setNotes([...notes, newNote]);
  };

  const removeNote = (title) => {
    setNotes(notes.filter((note) => note.title !== title));
  };

  function handleEdit(title) {
    const editNote = notes.find((note) => note.title === title);
    setEditNote(editNote);
  }

  function handleSave(title) {
    const updatedNotes = notes.map((note) => {
      if (note.title === title) {
        return { title, body: noteValues[title] };
      }
      return note;
    });
    setNotes(updatedNotes);
  }

  return (
    <div className="Note">
      <div className="containerNote">
        {notes.map((note) => (
          <motion.div
            initial={{ scale: 0, rotate: 0, borderRadius: "50%" }}
            animate={{ scale: 1, rotate: 360, borderRadius: "5px" }}
            transition={{ duration: 2 }}
            id="allNote"
            className={note.title}
            key={note.title}
          >
            <div>
              <h3>{note.title}</h3>
              {editNote ? (
                <textarea
                  value={noteValues[note.title] || ''}
                  onChange={(e) =>
                    setNoteValues({
                      ...noteValues,
                      [note.title]: e.target.value,
                    })
                  }
                />
              ) : (
                <p>{note.body}</p>
              )}
            </div>
            <div className="action">
              <motion.button
                className="remove"
                whileTap={{ scale: 0.8 }}
                onClick={() => removeNote(note.title)}
              >
                <IoCloseCircleOutline />
              </motion.button>
              <motion.button
                className="edit"
                animate={editNote ? { filter: "grayscale(100%)" } : {}}
                whileTap={editNote ? {} : { scale: 0.8 }}
                onClick={() => handleEdit(note.title)}
              >
                <IoCreateOutline />
              </motion.button>
              {editNote && (
                <motion.button
                  className="valid"
                  whileTap={{ scale: 0.8 }}
                  onClick={() => {
                    handleSave(note.title);
                    setEditNote(null);
                  }}
                >
                  <IoCheckmarkCircleOutline />
                </motion.button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      <Suspense fallback={<div>...</div>}>
        <Form addNote={addNote} open={open} />
      </Suspense>
      <Add onClick={handleOpen} open={open} />
    </div>
  );
}

export default Note;
