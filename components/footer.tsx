"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import CustomButton from "@/components/custom-btn";

export default function Footer() {
  const { push } = useRouter();

  return (
    <footer className="w-full relative bg-white pt-16 md:pt-20 overflow-hidden border-t border-gray-100">
      
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] md:w-[80%] h-[600px] blur-[100px] opacity-60 pointer-events-none"
        style={{
          background: "radial-gradient(circle at top, #fbcfe8 0%, #bae6fd 35%, #fef08a 70%, transparent 90%)",
        }}
      />

      <div className="max-w-7xl px-6 mx-auto relative z-10">
        <div className="w-full text-center space-y-6">
          
          {/* Section Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400 block"
          >
            Next Steps
          </motion.span>

          {/* Engineer-focused Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl italic font-serif text-gray-900 tracking-tight"
          >
            Ready to build what&apos;s next.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto max-w-xl text-gray-600 text-lg leading-relaxed font-light"
          >
            I am actively seeking full-time Software Engineering roles. If you are looking for a dedicated developer who cares about architecture, performance, and user experience, let&apos;s connect.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center pt-8 pb-16"
          >
            <CustomButton
              onClick={() => push("/contact")}
              label="Get In Touch"
            />
          </motion.div>
        </div>

        {/* Minimal Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center border-t border-gray-100/60 pt-8 pb-12"
        >
          <p className="text-xs font-mono text-gray-400 uppercase tracking-wider">
            © {new Date().getFullYear()} Viraj Jadhav. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}