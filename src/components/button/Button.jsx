import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Button = memo(({ onClick, value, style, text, whileTap }) => {
  return (
    <AnimatePresence>
      <motion.button
        className="custom-button"
        whileHover={{
          backgroundColor: "var(--accent-color)",
          filter: "brightness(0.8)",
        }}
        whileTap={whileTap}
        onClick={onClick}
        value={value}
        style={style}
      >
        {text}
      </motion.button>
    </AnimatePresence>
  );
});

export default Button;
