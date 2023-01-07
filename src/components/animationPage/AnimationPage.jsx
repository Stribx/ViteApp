import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, x: `-100%` },
  animate: { opacity: 1, x: 0, transition: { ease: "easeOut" } },
  exit: { opacity: 0, x: `100%`, transition: { ease: "easeOut" } },
};

const style = {
  display: "flex",
  flexGrow: "1",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
};

const AnimationPage = ({ children }) => {
  return (
    <motion.div
      style={style}
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default AnimationPage;
