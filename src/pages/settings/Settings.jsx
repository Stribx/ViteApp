import "./Settings.css";
import DarkMode from "../../components/button/Darkmode";
import { motion, AnimatePresence } from "framer-motion";

export default function Settings(props) {
  return (
    <motion.div className="Settings">
      <h1>Settings</h1>
      <AnimatePresence mode="wait">
        <DarkMode
          isDarkMode={props.isDarkMode}
          setIsDarkMode={props.setIsDarkMode}
        />
      </AnimatePresence>
    </motion.div>
  );
}
