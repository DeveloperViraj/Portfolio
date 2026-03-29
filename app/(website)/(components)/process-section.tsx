"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/app/(website)/(components)/section-heading";
import { IMAGES } from "@/assets/images";

const PROCESS_STEPS = [
  {
    id: "01",
    title: "Discover",
    desc: "Understanding your vision, defining architecture, and mapping out the tech stack.",
    image: IMAGES.screen1, 
  },
  {
    id: "02",
    title: "Design",
    desc: "Crafting clean, intuitive user interfaces and scalable database schemas.",
    image: IMAGES.screen2, 
  },
  {
    id: "03",
    title: "Develop",
    desc: "Writing robust, fast, and secure production-grade code.",
    image: IMAGES.screen3, 
  },
  {
    id: "04",
    title: "Deliver",
    desc: "Rigorous testing, automated CI/CD pipelines, and seamless launch.",
    image: IMAGES.screen4, 
  },
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <SectionHeading
          primaryHeading="Project Workflow"
          secondHeading="How I build products"
        />

        {/* PRO-LEVEL SPLIT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mt-16 lg:mt-24 items-center">
          
          {/* LEFT: THE INTERACTIVE TRACK */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col relative">
            <div className="absolute left-[3px] top-2 bottom-2 w-[2px] bg-gray-100 rounded-full z-0" />
            
            <div className="flex flex-col gap-10 md:gap-14">
              {PROCESS_STEPS.map((step, idx) => {
                const isActive = activeStep === idx;
                
                return (
                  <div
                    key={step.id}
                    onClick={() => setActiveStep(idx)}
                    onMouseEnter={() => setActiveStep(idx)}
                    className={`cursor-pointer group relative pl-10 transition-all duration-500 z-10 ${
                      isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
                    }`}
                  >
                    <div className="absolute left-0 top-2 bottom-0 flex justify-center">
                      <motion.div
                        initial={false}
                        animate={{
                          height: isActive ? "100%" : "8px",
                          backgroundColor: isActive ? "#111827" : "#d1d5db", 
                        }}
                        className="w-[8px] rounded-full shadow-sm"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    </div>
                    
                    <span className="text-xs font-mono tracking-[0.2em] uppercase text-gray-400 block mb-2 transition-colors duration-300 group-hover:text-gray-600">
                      Step {step.id}
                    </span>
                    
                    <h3 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 tracking-tight transition-transform duration-300 origin-left">
                      {step.title}
                    </h3>
                    
                    <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                      <p className="text-gray-500 font-light leading-relaxed max-w-sm text-lg">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: THE 5:4 IMAGE CANVAS */}
          <div className="lg:col-span-7 order-1 lg:order-2 w-full relative">
            
            {/* Background Pastel Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] blur-[100px] opacity-40 pointer-events-none z-0"
              style={{
                background: "radial-gradient(circle, #fbcfe8 0%, #bae6fd 40%, #fef08a 80%, transparent 100%)",
              }}
            />

            {/* The 5:4 Image Frame */}
            <div className="relative w-full aspect-[5/4] rounded-3xl overflow-hidden bg-[#f8f9fa] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100/80 z-10 ring-1 ring-gray-900/5 flex items-center justify-center">
              
              {/* 🚨 THE ULTIMATE FIX: Deep Cinematic Fade 🚨 */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, filter: "blur(8px)", scale: 1.02 }}
                  animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                  exit={{ opacity: 0, filter: "blur(4px)", scale: 0.98 }}
                  transition={{ 
                    duration: 0.5, // 0.5s out, 0.5s in. Total 1 full second of smooth transition.
                    ease: "easeInOut" // Symmetrical smoothing on both ends
                  }}
                  className="absolute inset-0 z-10"
                >
                  <Image
                    src={PROCESS_STEPS[activeStep].image.src || PROCESS_STEPS[activeStep].image}
                    alt={PROCESS_STEPS[activeStep].title}
                    fill
                    className="object-cover object-center"
                    priority
                    quality={100}
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Inner bezel highlight for premium depth */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5 pointer-events-none z-20" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}