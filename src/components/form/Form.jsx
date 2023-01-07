import { useState } from "react";
import { motion } from "framer-motion";

function Form({ addNote, ...props }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || body.trim() === '') {
      alert('Please enter a title and body for the note');
      return;
    }
    addNote({ title, body });
    setTitle('');
    setBody('');
  }

  return (
    <motion.div
      open={props.open}
      className={props.open ? "Form z":"Form"}
    >
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="text">Text</label>
        <textarea
          type="text"
          id="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <motion.button whileTap={{scale: 0.9}} whileHover={{ backgroundColor: "var(--accent-color)" }} className="add">Add</motion.button>
      </form>
    </motion.div>
  );
}

export default Form;
