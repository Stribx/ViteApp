import { memo } from "react";
import { motion } from "framer-motion";

const Button = memo(({ onClick, value, style, text }) => {
  return (
    <motion.button
      className="custom-button"
      whileHover={{ backgroundColor: "var(--accent-color)", filter: "brightness(0.8)" }}
      whileTap={{ scale: 0.9, backgroundColor: "var(--main-text-color)" }}
      onClick={onClick}
      value={value}
      style={style}
    >
      {text}
    </motion.button>
  );
});

export default Button;
