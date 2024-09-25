"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
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

  const projects = [
    { name: "AI-Powered Chat Bot", tech: "React, Node.js, TensorFlow" },
    { name: "E-commerce Platform", tech: "Next.js, GraphQL, MongoDB" },
    { name: "Blockchain Wallet", tech: "Solidity, Web3.js, React Native" },
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <motion.div
        className="max-w-2xl mx-auto p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="text-4xl font-bold mb-6" variants={itemVariants}>
          Projects
        </motion.h2>
        {projects.map((project, index) => (
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
