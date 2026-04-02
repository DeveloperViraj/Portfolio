"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileTextIcon, MailIcon } from "lucide-react";

export type IconProps = React.HTMLAttributes<SVGElement>;

// Custom crisp SVG icons
const Icons = {
  resume: (props: IconProps) => <FileTextIcon {...props} />,
  mail: (props: IconProps) => <MailIcon {...props} />,
  github: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
    </svg>
  ),
  linkedin: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  leetcode: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114l5.313-5.692a.459.459 0 0 1 .655-.008l.008.008 3.024 3.032c.54.542 1.415.542 1.955.002a1.378 1.378 0 0 0 0-1.951L17.06 1.472A1.373 1.373 0 0 0 13.483 0zm-2.856 15.341a1.376 1.376 0 0 0 0 2.75h9.845a1.376 1.376 0 0 0 0-2.75h-9.845z"/>
    </svg>
  )
};

// Data injected with specific brand colors and custom widths for the pills
const SOCIALS = [
  {
    name: "Resume",
    url: "https://drive.google.com/file/d/1wM-2u8LC25kShHC8Obzfa9frNPZhtTH_/view?usp=sharing",
    icon: Icons.resume,
    color: "#10b981", // Emerald Green
    width: 130,
  },
  {
    name: "GitHub",
    url: "https://github.com/DeveloperViraj",
    icon: Icons.github,
    color: "#111827", // Almost Black
    width: 125,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/viraj-jadhav-698641376/",
    icon: Icons.linkedin,
    color: "#0A66C2", // Official LinkedIn Blue
    width: 140,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/developerviraj/",
    icon: Icons.leetcode,
    color: "#FFA116", // Official LeetCode Orange
    width: 145,
  },
  {
    name: "Email",
    url: "mailto:workwithvirajjadhav@gmail.com",
    icon: Icons.mail,
    color: "#ef4444", // Red
    width: 115,
  },
];

export default function DockSocial() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-wrap items-center gap-3">
      {SOCIALS.map((social, idx) => {
        const isHovered = hoveredIndex === idx;

        return (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative flex items-center justify-start overflow-hidden rounded-full border border-gray-200 bg-white shadow-sm"
            initial={false}
            animate={{
              width: isHovered ? social.width : 52, // Snaps open to custom width
              backgroundColor: isHovered ? social.color : "#ffffff",
              borderColor: isHovered ? social.color : "#e5e7eb",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{ height: 52 }}
          >
            {/* The Icon */}
            <motion.div
              className="absolute left-[16px] flex items-center justify-center"
              animate={{ color: isHovered ? "#ffffff" : "#6b7280" }} // Fades from gray to white
              transition={{ duration: 0.2 }}
            >
              <social.icon className="w-5 h-5" />
            </motion.div>

            {/* The Text (Glides in on hover) */}
            <motion.span
              className="absolute left-[48px] whitespace-nowrap font-mono text-sm font-semibold tracking-wide text-white"
              initial={false}
              animate={{
                opacity: isHovered ? 1 : 0,
                x: isHovered ? 0 : -10, // Slides slightly to the right
              }}
              transition={{ duration: 0.2, delay: isHovered ? 0.05 : 0 }}
            >
              {social.name}
            </motion.span>
          </motion.a>
        );
      })}
    </div>
  );
}