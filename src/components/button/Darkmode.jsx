import { memo } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const DarkMode = memo(({ isDarkMode, setIsDarkMode }) => {
  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("lightMode", !isDarkMode);
  }

  return (
    <div className="mode">
      <AnimatePresence>
        <motion.button
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          exit={{ x: 100 }}
          whileTap={{ scale: 0.8 }}
          className={`dark-mode-button ${isDarkMode ? "hidden" : ""}`}
          onClick={toggleDarkMode}
        >
          <IoSunnyOutline />
        </motion.button>
      </AnimatePresence>
      <AnimatePresence>
        <motion.button
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          exit={{ x: 100 }}
          whileTap={{ scale: 0.8 }}
          className={`dark-mode-button ${isDarkMode ? "" : "hidden"}`}
          onClick={toggleDarkMode}
        >
          <IoMoonOutline />
        </motion.button>
      </AnimatePresence>
    </div>
  );
});

export default DarkMode;
