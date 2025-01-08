"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import StickyHeader from "@/components/shared/header";

interface AboutData {
  title: string;
  paragraphs: string[];
}

export default function About() {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);

  useEffect(() => {
    fetch("/data/about.json")
      .then((response) => response.json())
      .then((data) => setAboutData(data))
      .catch((error) => console.error("Error fetching about data:", error));
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

  if (!aboutData) return null;

  return (
    <>
      <div className="relative">
        <StickyHeader />

        <div className=" flex items-center justify-center bg-black text-white">
          <motion.div
            className="max-w-2xl mx-auto p-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {aboutData.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-lg text-zinc-400 mb-4"
                variants={itemVariants}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
