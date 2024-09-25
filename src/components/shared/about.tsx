"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
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

  return (
    <div className="h-full flex items-center justify-center text-white">
      <motion.div
        className="max-w-2xl mx-auto p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="text-4xl font-bold mb-6" variants={itemVariants}>
          About Me
        </motion.h2>
        <motion.p
          className="text-lg text-zinc-400 mb-4"
          variants={itemVariants}
        >
          I&apos;m a passionate developer with a keen interest in creating
          elegant, efficient solutions to complex problems. My journey in tech
          has led me through various languages and frameworks, always with an
          eye towards innovation and user-centric design.
        </motion.p>
        <motion.p className="text-lg text-zinc-400" variants={itemVariants}>
          When I&apos;m not coding, you can find me exploring new technologies,
          contributing to open-source projects, or sharing my knowledge through
          tech blogs and community events.
        </motion.p>
      </motion.div>
    </div>
  );
}
