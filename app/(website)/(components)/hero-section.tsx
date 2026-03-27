"use client";

import { IMAGES } from "@/assets/images";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import CustomButton from "@/components/custom-btn";

function HeroSection() {
  return (
    <div className="relative w-full bg-[#F5F5F5] overflow-hidden">

      {/* Balanced Symmetric Radial Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(1200px 900px at 50% 80%, rgba(120,190,255,0.9) 0%, transparent 70%),
            radial-gradient(900px 700px at 15% 10%, rgba(255,217,120,0.9) 0%, transparent 65%),
            radial-gradient(900px 700px at 85% 10%, rgba(255,160,130,0.9) 0%, transparent 65%),
            linear-gradient(180deg, #F5F5F5 0%, #ECECEC 100%)
          `,
        }}
      />

      <div className="max-w-7xl relative mx-auto w-full flex flex-col h-screen pt-20">

        {/* Headline */}
        <div className="relative z-10 mb-6 flex flex-col items-center px-4 shrink-0">
          <Headline />
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            delay: 0.3,
          }}
          className="flex-1 relative flex items-end justify-center"
        >
          <Image
            src={IMAGES.virajimage.src}
            width={1600}
            height={1600}
            alt="Viraj Jadhav"
            priority
            className="z-10 h-[85vh] w-auto object-contain object-bottom -translate-y-24"
          />
        </motion.div>

        <MiddleSection />

        {/* Bottom Section */}
        <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center">
          <BottomSection />
        </div>

      </div>

    </div>
  );
}

export default HeroSection;

/* ---------------- Badge ---------------- */

const AvailableBadge = () => {
  return (
    <div></div>
  );
};

/* ---------------- Middle Section ---------------- */

const MiddleSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay: 0.5,
      }}
      className="hidden md:flex px-4 absolute h-full w-full justify-between items-center"
    >
      <AvailableBadge />
    </motion.div>
  );
};

/* ---------------- Headline ---------------- */

const Headline = () => {
  return (
    <div className="w-full text-center">

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-dm-sans font-medium text-gray-800"
      >
        Hey! I’m
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
          delay: 0.3,
        }}
        className="text-5xl md:text-7xl mb-2 lg:text-8xl tracking-tight font-black text-black"
      >
        VIRAJ JADHAV
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-3xl md:text-5xl font-newsreader italic text-gray-800"
      >
        Full Stack Developer
      </motion.h3>

      {/* Mobile Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.3,
        }}
        className="md:hidden flex justify-center mt-4"
      >
        <AvailableBadge />
      </motion.div>

    </div>
  );
};

/* ---------------- Bottom Section ---------------- */

const BottomSection = () => {
  const { push } = useRouter();

  return (
    <CustomButton onClick={() => push("/contact")} label="Get In Touch" />
  );
};