"use client"

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface WorkExperience {
  company: string;
  role: string;
  period: string;
}

interface WorkData {
  title: string;
  experiences: WorkExperience[];
}

export default function Work() {
  const [workData, setWorkData] = useState<WorkData | null>(null);

  useEffect(() => {
    fetch("/data/work.json")
      .then((response) => response.json())
      .then((data) => setWorkData(data))
      .catch((error) => console.error("Error fetching work data:", error));
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

  if (!workData) return null;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <motion.div
        className="max-w-2xl mx-auto p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="text-4xl font-bold mb-6" variants={itemVariants}>
          {workData.title}
        </motion.h2>
        {workData.experiences.map((job, index) => (
          <motion.div key={index} className="mb-6" variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-zinc-300">{job.company}</h3>
            <p className="text-lg text-zinc-400">{job.role}</p>
            <p className="text-sm text-zinc-500">{job.period}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}