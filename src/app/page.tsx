"use client";

import React, { useState } from "react";
import About from "@/components/shared/about";
import Work from "@/components/shared/work";
import Projects from "@/components/shared/projects";
import Blogs from "@/components/shared/blogs";
import Contact from "@/components/shared/contact";
import Hero from "@/components/shared/Hero";
import ContactDemo from "@/components/shared/contactDemo";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"; // Importing icons

export default function Home() {
  return <Hero />;
}
