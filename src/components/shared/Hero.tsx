"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function shuffleString(str: string): string {
  const arr = str.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join("");
}

const navItems = [
  { label: "About", link: "/about" },
  { label: "Work", link: "/work" },
  { label: "Projects", link: "/projects" },
  { label: "Blogs", link: "/blogs" },
  { label: "Contact", link: "/contact" },
];

export default function SimpleNav() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [displayText, setDisplayText] = useState<Record<string, string>>({});

  function handleHoverStart(label: string) {
    setHoveredItem(label);
    setDisplayText((prev) => ({
      ...prev,
      [label]: shuffleString(label),
    }));
  }

  function handleHoverEnd(label: string) {
    setHoveredItem(null);
    setDisplayText((prev) => ({
      ...prev,
      [label]: label,
    }));
  }

  return (
    <div className="min-h-screen bg-black flex items-center  justify-center">
      <nav>
        {/* 
          flex-col: Stacks items vertically
          items-center: Centers them horizontally
          space-y-8: Adds vertical spacing between items
        */}
        <ul className="flex flex-col items-center  animate-pulse space-y-8">
          {navItems.map(({ label, link }) => (
            <li key={label} className="relative">
              <Link href={link}>
                <motion.span
                  className="text-white text-2xl font-bold cursor-pointer"
                  onHoverStart={() => handleHoverStart(label)}
                  onHoverEnd={() => handleHoverEnd(label)}
                >
                  {displayText[label] || label}
                </motion.span>
              </Link>

              {hoveredItem === label && (
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-white"
                  layoutId="underline"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
