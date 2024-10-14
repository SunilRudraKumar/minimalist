"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface BlogPost {
  title: string;
  date: string;
}

interface BlogsData {
  title: string;
  posts: BlogPost[];
}

export default function Blogs() {
  const [blogsData, setBlogsData] = useState<BlogsData | null>(null);

  useEffect(() => {
    fetch("/data/blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogsData(data))
      .catch((error) => console.error("Error fetching blogs data:", error));
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

  if (!blogsData) return null;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <motion.div
        className="max-w-2xl mx-auto p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="text-4xl font-bold mb-6" variants={itemVariants}>
          {blogsData.title}
        </motion.h2>
        {blogsData.posts.map((post, index) => (
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
