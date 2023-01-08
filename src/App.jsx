import React, { lazy, useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar/Navbar";
import AnimationPage from "./components/animationPage/AnimationPage";
const Note = lazy(() => import("./pages/note/Note"));
const Home = lazy(() => import("./pages/home/Home"));
const Weather = lazy(() => import("./pages/weather/Weather"));
const Calculator = lazy(() => import("./pages/calculator/Calculator"));
const Settings = lazy(() => import("./pages/settings/Settings"));

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const listener = () => {
      if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        setIsDarkMode(true);
      } else {
        setIsDarkMode(false);
      }
    };
    window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", listener);
    return () => {
      window.matchMedia("(prefers-color-scheme: light)").removeEventListener("change", listener);
    };
  }, []);  
  

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("lightMode");
    } else {
      document.body.classList.remove("lightMode");
    }
  }, [isDarkMode]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        animate={{
          background: [
            "linear-gradient(45deg,#142b59 0%,#f299a9 100%)",
            "linear-gradient(45deg,#f299a9 0%,#142b59 100%)",
            "linear-gradient(45deg,#142b59 0%,#142b59 100%)",
            "linear-gradient(45deg,#142b59 0%,#f299a9 100%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="App"
      >
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Navbar />}>
              <Route
                path="/ViteApp/"
                element={
                  <AnimationPage>
                    <Home />
                  </AnimationPage>
                }
              />
              <Route
                path="/ViteApp/weather"
                element={
                  <AnimationPage>
                    <Weather />
                  </AnimationPage>
                }
              />
              <Route
                path="/ViteApp/calculator"
                element={
                  <AnimationPage>
                    <Calculator />
                  </AnimationPage>
                }
              />
              <Route
                path="/ViteApp/note"
                element={
                  <AnimationPage>
                    <Note />
                  </AnimationPage>
                }
              />
              <Route
                path="/ViteApp/settings"
                element={
                  <AnimationPage>
                    <Settings
                      isDarkMode={isDarkMode}
                      setIsDarkMode={setIsDarkMode}
                    />
                  </AnimationPage>
                }
              />
              <Route
                path="*"
                element={
                  <AnimationPage>
                    <h1>Nothing here...</h1>
                  </AnimationPage>
                }
              />
            </Route>
          </Routes>
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;