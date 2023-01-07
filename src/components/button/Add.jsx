import {memo} from "react";
import { motion } from "framer-motion";
import { IoAddOutline } from "react-icons/io5";

const Add = memo(({ onClick, open }) => {
  return (
    <motion.button
      className={`add-button ${open ? "open z" : "open"}`}
      onClick={onClick}
      initial={{background:"var(--main-container-color)"}}
      whileHover={{ background: "#4B61A6" }}
      whileTap={{ background: "#fff" }}
    >
      <IoAddOutline />
    </motion.button>
  );
});

export default Add;
