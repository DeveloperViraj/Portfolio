"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/assets/images";
import DockSocial from "@/app/(website)/(components)/dock-social";
import SectionHeading from "@/app/(website)/(components)/section-heading";
import { useState } from "react";

export default function WhoAmI() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <SectionHeading
          primaryHeading="Who Am I?"
          secondHeading="Let me introduce myself"
        />

        <div className="grid lg:grid-cols-12 gap-16 items-start mt-16">
          
          {/* LEFT: MINIMALIST PORTRAIT & IDENTITY */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start relative"
          >
            {/* The interactive container */}
            <motion.div 
              className="relative w-full max-w-md mx-auto lg:mx-0 cursor-pointer group"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              animate={{ 
                scale: isHovered ? 1.03 : 1,
                y: isHovered ? -10 : 0,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              
              {/* 1. The Soft, Equal-Intensity Pastel Aura */}
              <motion.div
                className="absolute -inset-2 rounded-3xl blur-2xl z-0 pointer-events-none"
                animate={{ 
                  opacity: isHovered ? 0.9 : 0, 
                  backgroundPosition: isHovered ? ["0% 50%", "100% 50%", "0% 50%"] : "0% 50%"
                }}
                transition={{ 
                  opacity: { duration: 0.5, ease: "easeInOut" },
                  backgroundPosition: { duration: 4, repeat: Infinity, ease: "linear" } 
                }}
                style={{
                  backgroundImage: "linear-gradient(90deg, #fde047, #38bdf8, #f472b6, #fde047)", 
                  backgroundSize: "200% 200%",
                  backgroundRepeat: "no-repeat"
                }}
              />

              {/* 2. The Physical Card Base */}
              <motion.div 
                className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-white z-10 shadow-2xl ring-1 ring-gray-900/5 transition-shadow duration-500"
              >
                {/* Image smoothly fades from grayscale to color */}
                <Image
                  src={IMAGES.virajimage.src}
                  alt="Viraj Jadhav"
                  fill
                  className={`object-cover object-center transition-all duration-700 ease-out ${isHovered ? 'grayscale-0' : 'grayscale'}`}
                  priority
                />
                
                {/* Inner Shadow / Vignette */}
                <div className="absolute inset-0 z-20 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] pointer-events-none" />

                {/* Edge Lighting */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl border-[3px] pointer-events-none z-40 transition-colors duration-300"
                  animate={{
                    borderColor: isHovered ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0)"
                  }}
                />
              </motion.div>

            </motion.div>

            {/* IDENTITY BLOCK: Name, Title, and Socials grouped together */}
            <div className="text-center lg:text-left w-full mt-8 relative z-20 flex flex-col items-center lg:items-start">
              <h3 className="text-2xl font-serif font-medium text-gray-900">Viraj Jadhav</h3>
              <p className="text-sm font-mono text-gray-500 uppercase tracking-widest mt-1 mb-6">Software Engineer</p>
              
              {/* 🚨 MOVED THE SOCIAL DOCK HERE 🚨 */}
              <DockSocial />
            </div>
            
          </motion.div>

          {/* RIGHT: BIO & TIMELINE */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Bio */}
            <div className="prose prose-lg text-gray-600 mb-12">
              <p className="leading-relaxed font-light">
                I am a <strong className="text-gray-900 font-semibold">Full-Stack Developer</strong> who loves turning ideas into fast, functional, and scalable digital products. I build complete end-to-end solutions, from robust APIs and database schemas to highly interactive user interfaces.
              </p>
              <p className="leading-relaxed font-light mt-4">
                Beyond building standalone applications, I am deeply involved in the open-source community. I actively contribute to massive repositories like <strong className="text-gray-900 font-semibold">freeCodeCamp</strong> and <strong className="text-gray-900 font-semibold">Next.js</strong>, shipping production-grade code, debugging edge-cases, and optimizing platforms used by millions of developers globally.
              </p>
            </div>

            {/* VERTICAL TIMELINE */}
            <div className="border-l-2 border-gray-100 ml-2 space-y-10">
              
              {/* Timeline Item 1: Open Source */}
              <div className="relative pl-8">
                <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-blue-500 ring-4 ring-white shadow-sm" />
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                  <h3 className="text-lg font-bold text-gray-900">Open Source Contributor</h3>
                  <span className="text-xs font-mono text-blue-600 mt-1 sm:mt-0 font-semibold bg-blue-50 px-2 py-1 rounded-full">Aug 2025 — Present</span>
                </div>
                <p className="text-sm text-gray-900 font-medium mb-2">freeCodeCamp & Next.js</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Authored and shipped 10+ production-grade PRs. Resolved curriculum and platform bugs affecting millions of learners, stabilizing CI pipelines and aligning implementations with global maintainer feedback.
                </p>
              </div>

              {/* Timeline Item 2: Internship */}
              <div className="relative pl-8">
                <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-gray-300 ring-4 ring-white" />
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                  <h3 className="text-lg font-bold text-gray-900">Video Editing Intern</h3>
                  <span className="text-xs font-mono text-gray-400 mt-1 sm:mt-0">2024 — 2025</span>
                </div>
                <p className="text-sm text-gray-900 font-medium mb-2">Krafts Media</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Collaborated with designers and developers to align creative direction with product goals, contributing to UX-driven decisions and analytics-informed improvements.
                </p>
              </div>

              {/* Timeline Item 3: Degree */}
              <div className="relative pl-8">
                <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-gray-300 ring-4 ring-white" />
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                  <h3 className="text-lg font-bold text-gray-900">B.E - Electronics & Telecommunication</h3>
                  <span className="text-xs font-mono text-gray-400 mt-1 sm:mt-0">2022 — 2026</span>
                </div>
                <p className="text-sm text-gray-900 font-medium mb-2">D. Y. Patil College of Engineering, Pune</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  CGPA: 8.81/10. Focused on core computer science fundamentals, data structures, algorithms, and network engineering.
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}