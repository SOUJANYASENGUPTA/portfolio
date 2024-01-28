import React, { useState, useEffect, useRef } from "react";
import "./sidebar.scss";
import Links from "./Links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <motion.div className="sidebar" ref={sidebarRef} animate={open ? "open" : "closed"}>
      <ToggleButton setOpen={setOpen} />
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      
    </motion.div>
  );
};

export default Sidebar;
