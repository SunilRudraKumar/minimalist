"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Blogs() {
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

  const blogPosts = [
    { title: "The Future of AI in Web Development", date: "June 15, 2023" },
    {
      title: "Optimizing React Performance: Advanced Techniques",
      date: "May 22, 2023",
    },
    {
      title: "Building Scalable Microservices with Node.js",
      date: "April 10, 2023",
    },
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
          Blog Posts
        </motion.h2>
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="mb-6"
            variants={itemVariants}
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h3 className="text-2xl font-semibold text-zinc-300">
              {post.title}
            </h3>
            <p className="text-sm text-zinc-500">{post.date}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
