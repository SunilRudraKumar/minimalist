"use client"

import React from "react"
import { motion } from "framer-motion"

export default function Work() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const workExperience = [
    { company: "Tech Innovators", role: "Senior Developer", period: "2020 - Present" },
    { company: "Digital Solutions Inc.", role: "Full Stack Developer", period: "2018 - 2020" },
    { company: "StartUp Ventures", role: "Junior Developer", period: "2016 - 2018" },
  ]

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <motion.div
        className="max-w-2xl mx-auto p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="text-4xl font-bold mb-6" 
          variants={itemVariants}
        >
          Work Experience
        </motion.h2>
        {workExperience.map((job, index) => (
          <motion.div 
            key={index} 
            className="mb-6" 
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-zinc-300">{job.company}</h3>
            <p className="text-lg text-zinc-400">{job.role}</p>
            <p className="text-sm text-zinc-500">{job.period}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}