"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"; // Importing icons

interface HeroProps {
  activeSection: string | null;
  setActiveSection: (section: string | null) => void;
}

export default function HackerNav({
  activeSection,
  setActiveSection,
}: HeroProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const navItems = ["About", "Work", "Projects", "Blogs", "Contact"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <motion.nav
        className={`fixed w-full ${
          activeSection ? "top-0 pt-4 pb-4" : "top-1/2 -translate-y-1/2"
        } z-50`}
        animate={activeSection ? { top: 0 } : { top: "50%", y: "-50%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.ul
          className={`flex ${
            activeSection
              ? "flex-row justify-center items-center"
              : "flex-col items-center"
          } gap-6`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item) => (
            <motion.li key={item} className="relative" variants={itemVariants}>
              <motion.button
                className={`text-4xl font-bold ${
                  activeSection === item ? "text-white" : "text-zinc-500"
                } hover:text-white transition-all duration-300 ease-in-out`}
                onHoverStart={() => setHoveredItem(item)}
                onHoverEnd={() => setHoveredItem(null)}
                onClick={() => setActiveSection(item)}
                whileHover={{ scale: 1.1, x: activeSection ? 0 : 10 }}
                animate={activeSection === item ? pulseAnimation : {}}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                {item}
              </motion.button>
              {hoveredItem === item && !activeSection && (
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  layoutId="underline"
                  style={{ maxWidth: `${item.length * 1.8}ch` }}
                />
              )}
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </div>
  );
}
