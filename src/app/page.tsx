"use client";

import React, { useState, useEffect } from "react";
import About from "@/components/shared/about";
import Work from "@/components/shared/work";
import Projects from "@/components/shared/projects";
import Blogs from "@/components/shared/blogs";
import Contact from "@/components/shared/contact";
import Hero from "@/components/shared/Hero";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const sections = {
    About: <About />,
    Work: <Work />,
    Projects: <Projects />,
    Blogs: <Blogs />,
    Contact: <Contact />,
  };

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.h1
          className="text-white text-6xl font-bold"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          LOADING
        </motion.h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Hero activeSection={activeSection} setActiveSection={setActiveSection} />
      <AnimatePresence>
        {activeSection && (
          <motion.div
            key={activeSection}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-black z-40 overflow-hidden pt-20"
          >
            {sections[activeSection as keyof typeof sections]}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
