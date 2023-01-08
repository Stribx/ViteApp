import { memo, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 100 : -100,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    };
  }
};

const DarkMode = memo(({ isDarkMode, setIsDarkMode }) => {
  const [[icon, direction], setIcon] = useState([0, 0]);
  const paginate = (newDirection) => {
    setIcon([icon + newDirection, newDirection]);
  }

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("lightMode", !isDarkMode);
    paginate(1);
  }

  return (
    <div className="mode">
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <motion.button
          key={icon}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.8 }}
          className={`dark-mode-button`}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <IoSunnyOutline /> : <IoMoonOutline />}
        </motion.button>
      </AnimatePresence>
    </div>
  );
});

export default DarkMode;
