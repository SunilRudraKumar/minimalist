"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Project {
  name: string;
  tech: string;
}

interface ProjectsData {
  title: string;
  projects: Project[];
}

export default function Projects() {
  const [projectsData, setProjectsData] = useState<ProjectsData | null>(null);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((response) => response.json())
      .then((data) => setProjectsData(data))
      .catch((error) => console.error("Error fetching projects data:", error));
  }, []);

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

  if (!projectsData) return null;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <motion.div
        className="max-w-2xl mx-auto p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="text-4xl font-bold mb-6" variants={itemVariants}>
          {projectsData.title}
        </motion.h2>
        {projectsData.projects.map((project, index) => (
          <motion.div
            key={index}
            className="mb-6 p-4 border border-zinc-800 rounded-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h3 className="text-2xl font-semibold text-zinc-300">
              {project.name}
            </h3>
            <p className="text-sm text-zinc-500">{project.tech}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
