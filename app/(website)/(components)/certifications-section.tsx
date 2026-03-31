"use client";

import Image from "next/image";
import { IMAGES } from "@/assets/images";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Bharat AI Quest – Global Fintech Fest",
    description: "Explored AI applications in fintech with NPCI and NVIDIA.",
    image: IMAGES.certifications.cert1,
    issuer: "NPCI & NVIDIA",
    date: "2024"
  },
  {
    title: "Generative AI Virtual Internship",
    description: "10-week program learning LLMs and prompt engineering.",
    image: IMAGES.certifications.cert2,
    issuer: "Google Cloud",
    date: "2024"
  },
  {
    title: "HP Power Lab 2.0",
    description: "Participated in the Online Assessment organized by Hindustan Petroleum.",
    image: IMAGES.certifications.cert3,
    issuer: "HP & Unstop",
    date: "2024"
  },
  {
    title: "Android Developer Virtual Internship",
    description: "Mastered Android architecture, UI design, and deployment.",
    image: IMAGES.certifications.cert4,
    issuer: "Google Developers",
    date: "2024"
  },
];

// We duplicate the array to create a seamless infinite loop
const duplicatedCerts = [...certifications, ...certifications, ...certifications, ...certifications];

export default function CertificationsSection() {
  return (
    <section className="py-32 bg-white overflow-hidden flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full mb-12">
        
        {/* EDITORIAL HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 pb-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl italic font-serif text-gray-900 tracking-tight">
              Verified Credentials
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed md:text-right font-mono uppercase tracking-widest">
            Proof of Work —
          </p>
        </motion.div>
      </div>

      {/* INFINITE SMOOTH SCROLL TICKER */}
      {/* The mask-image creates the smooth fade-out effect on the left and right edges */}
      <div className="relative w-full flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex gap-8 pl-8 w-max"
          // Moves the container by exactly half its width, then instantly resets to create a perfect loop
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35, // Increase to make it slower, decrease to make it faster
          }}
        >
          {duplicatedCerts.map((cert, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col w-[280px] sm:w-[320px] shrink-0"
            >
              {/* COMPACT IMAGE FRAME */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50 border border-gray-200 rounded-sm mb-4">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover p-2 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                />
              </div>

              {/* CLEAN TYPOGRAPHY */}
              <div className="flex justify-between items-start mb-2 gap-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 group-hover:text-blue-600 transition-colors">
                  {cert.issuer}
                </span>
                <span className="text-[10px] font-mono text-gray-400">
                  {cert.date}
                </span>
              </div>
              
              <h3 className="text-lg font-serif text-gray-900 mb-2 leading-tight">
                {cert.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                {cert.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}