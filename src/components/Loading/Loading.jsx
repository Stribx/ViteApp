import { motion } from "framer-motion";

export default function Loading() {
  const LoadingStyle = {
    display: "flex",
    flexGrow: "1",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    position: "relative"
  };
  return (
    <div style={LoadingStyle}>
      <motion.span
        initial={{ width: "92px", height: "92px", border: "2px solid #111", rotate:45, position:"absolute" }}
        animate={{
          rotate: 405,
        }}
        exit={{opacity:0}}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      ></motion.span>
      <motion.span
        initial={{ width: "64px", height: "64px", border: "2px solid #111" }}
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      ></motion.span>
    </div>
  );
}
