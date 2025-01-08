"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/movingborders"; // Import the MovingBorder component

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
        className="max-w-6xl mx-auto p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogsData.posts.map((post, index) => (
            <motion.div
              key={index}
              className="relative p-[1px] overflow-hidden rounded-lg"
              variants={itemVariants}
              style={{ height: "200px" }} // Set a fixed height for all cards
            >
              <Button
                // overrides come here
                duration={4500}
                containerClassName="w-full h-full p-[1px] overflow-hidden rounded-lg"
                className="p-4" // Or any child content styling
              >
                <div className="absolute inset-0">
                  <div className="h-full w-full opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]" />
                </div>
                <div className="relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white p-4 rounded-lg h-full">
                  <h3 className="text-2xl font-semibold text-zinc-300">
                    {post.title}
                  </h3>
                  <p className="text-sm text-zinc-500">{post.date}</p>
                </div>
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
