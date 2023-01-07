import { Suspense } from "react";
import {
  IoHomeOutline,
  IoCloudOutline,
  IoClipboardOutline,
  IoSettingsOutline,
  IoCalculatorOutline,
} from "react-icons/io5";
import "./Navbar.css";
import { Outlet, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Loading from "../Loading/Loading";

export default function Navbar() {
  return (
    <>
      <nav className="Navbar">
        <NavLink to="/">
          <motion.div whileTap={{ scale: 0.8 }}>
            <IoHomeOutline />
          </motion.div>
        </NavLink>
        <NavLink to="/weather">
          <motion.div whileTap={{ scale: 0.8 }}>
            <IoCloudOutline />
          </motion.div>
        </NavLink>
        <NavLink to="/note">
          <motion.div whileTap={{ scale: 0.8 }}>
            <IoClipboardOutline />
          </motion.div>
        </NavLink>
        <NavLink to="/calculator">
          <motion.div whileTap={{ scale: 0.8 }}>
            <IoCalculatorOutline />
          </motion.div>
        </NavLink>
        <NavLink to="/settings">
          <motion.div whileTap={{ scale: 0.8 }}>
            <IoSettingsOutline />
          </motion.div>
        </NavLink>
      </nav>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
}
