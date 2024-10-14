"use client";

import React, { useState } from "react";
import About from "@/components/shared/about";
import Work from "@/components/shared/work";
import Projects from "@/components/shared/projects";
import Blogs from "@/components/shared/blogs";
import Contact from "@/components/shared/contact";
import Hero from "@/components/shared/Hero";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"; // Importing icons

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = {
    About: <About />,
    Work: <Work />,
    Projects: <Projects />,
    Blogs: <Blogs />,
    Contact: <Contact />,
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Hero activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex-grow h-screen pt-20 overflow-hidden">
        {" "}
        {/* Prevent scrolling */}
        <AnimatePresence>
          {activeSection && (
            <motion.div
              key={activeSection}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-black z-40 overflow-hidden h-full" // Ensure it takes full height
            >
              {sections[activeSection as keyof typeof sections]}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Footer Section */}
      <footer className="w-full bg-gray-800 text-white py-4">
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </footer>
    </main>
  );
}
