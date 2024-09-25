"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
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
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <motion.div
        className="max-w-2xl mx-auto p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="text-4xl font-bold mb-6" variants={itemVariants}>
          Contact Me
        </motion.h2>
        <motion.form className="space-y-4" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-zinc-400"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full rounded-md bg-zinc-900 border-zinc-700 shadow-sm focus:border-zinc-500 focus:ring focus:ring-zinc-500 focus:ring-opacity-50"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md bg-zinc-900 border-zinc-700 shadow-sm focus:border-zinc-500 focus:ring focus:ring-zinc-500 focus:ring-opacity-50"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-zinc-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full rounded-md bg-zinc-900 border-zinc-700 shadow-sm focus:border-zinc-500 focus:ring focus:ring-zinc-500 focus:ring-opacity-50"
            ></textarea>
          </motion.div>
          <motion.button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}
