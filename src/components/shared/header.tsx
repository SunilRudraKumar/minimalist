"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, Variants } from "framer-motion";

// Example nav items with section IDs (matching your page sections)
const navItems = [
  //   { label: "Hero", sectionId: "hero-section" },
  { label: "About", sectionId: "about" },
  { label: "Work", sectionId: "work" },
  { label: "Projects", sectionId: "projects" },
  { label: "Blogs", sectionId: "blogs" },
  { label: "Contact", sectionId: "contact" },
  // Add more as needed
];

const headerVariants: Variants = {
  initial: { y: 0 },
  scrolled: { y: -50 }, // Moves up by 50px (you can reduce or increase)
};

export default function StickyHeader() {
  const [activeSection, setActiveSection] = useState<string>("Hero");
  const [hideHeader, setHideHeader] = useState<boolean>(false);
  const lastScrollY = useRef<number>(0);

  // Track scroll to decide whether to hide or show the header
  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      // If scrolling down beyond 150px, hide header, else show
      if (isScrollingDown && currentScrollY > 150) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer to highlight active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section is in view, set it active
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id");
            if (sectionId) {
              setActiveSection(sectionId);
              // e.g. "hero-section" => "hero"
              // or rename to your liking
            }
          }
        });
      },
      { threshold: 0.4 } // Adjust to taste (0.4 means 40% in view)
    );

    // Observe each section by ID
    navItems.forEach((nav) => {
      const sectionEl = document.getElementById(nav.sectionId);
      if (sectionEl) {
        observer.observe(sectionEl);
      }
    });

    return () => {
      // Cleanup
      observer.disconnect();
    };
  }, []);

  return (
    <motion.header
      className="fixed top-0 w-full bg-black text-white z-50 shadow-md"
      initial="initial"
      animate={hideHeader ? "scrolled" : "initial"}
      variants={headerVariants}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4 flex space-x-6">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={`${item.sectionId}`}
            className={`cursor-pointer transition-all duration-300 ${
              activeSection.toLowerCase() === item.label.toLowerCase()
                ? "text-green-400 font-bold" // highlight
                : "text-gray-300 hover:text-white"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
