import "./Settings.css";
import DarkMode from "../../components/button/Darkmode";
import { motion } from "framer-motion";

export default function Settings(props) {

  function handleBackground(e) {
    props.setIsAnimate(e.target.checked);
  }

  return (
    <div className="Settings">
      <h1>Settings</h1>
        <DarkMode
          isDarkMode={props.isDarkMode}
          setIsDarkMode={props.setIsDarkMode}
        />
        <h1>Background</h1>
        <div className="checkbox">
          <motion.input
          animate={{x: props.isAnimate ? "450%": "0%" }}
           type="checkbox" name="checkbox" id="checkbox" checked={props.isAnimate} onChange={handleBackground} />
        </div>
    </div>
  );
}
