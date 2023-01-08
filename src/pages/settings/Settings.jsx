import "./Settings.css";
import DarkMode from "../../components/button/Darkmode";

export default function Settings(props) {
  return (
    <div className="Settings">
      <h1>Settings</h1>
        <DarkMode
          isDarkMode={props.isDarkMode}
          setIsDarkMode={props.setIsDarkMode}
        />
    </div>
  );
}
