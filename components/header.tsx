"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { routes } from "@/lib/constant";
import { useRouter } from "next/navigation";
import { MenuVertical } from "@/components/ui/menu-vertical";

const LOGO_WRAPPER_VARIANTS = {
  center: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
  },
  topLeft: {
    top: 0,
    left: 0,
    right: 0,
    bottom: "auto",
    height: "auto",
  },
};

export default function Header({ transition }: { transition: boolean }) {
  const isMobile = false;
  const { push } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      variants={LOGO_WRAPPER_VARIANTS}
      initial="center"
      animate={transition ? "topLeft" : "center"}
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
      className="sticky top-0 z-40 flex items-center justify-center"
    >
      <div className="relative max-w-7xl size-full">
        
        {/* Left Name / Logo */}
        {transition ? (
          <motion.div
            onClick={() => push("/")}
            layoutId="logo"
            className="absolute cursor-pointer z-[110] left-5"
            animate={{ top: 32 }}
          >
            <Logo size="sm" />
          </motion.div>
        ) : (
          <motion.div
            onClick={() => push("/")}
            layoutId="logo"
            className="absolute cursor-pointer z-[110] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <Logo size={isMobile ? "lg" : "xl"} draw />
          </motion.div>
        )}

        {/* Hamburger Icon Wrapper */}
        <motion.div
          initial={{ top: 28, right: -43, opacity: 0 }}
          animate={
            transition
              ? { top: 28, right: 20, opacity: 1 }
              : { top: 28, right: -43, opacity: 0 }
          }
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
          className="absolute z-[110] flex items-center gap-x-4"
        >
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative rounded-full bg-black/5 p-4 cursor-pointer hover:bg-black/10 transition-colors"
          >
            <motion.div
              animate={menuOpen ? { rotate: 45, opacity: 0 } : { rotate: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Menu size={16} />
            </motion.div>

            <motion.div
              animate={menuOpen ? { rotate: 0, opacity: 1 } : { rotate: -45, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <X size={16} />
            </motion.div>
          </button>
        </motion.div>

        {/* THE FULL SCREEN OVERLAY MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0, y: -30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} 
              className="fixed inset-0 z-[100] bg-white/40 backdrop-blur-2xl items-start flex flex-col justify-center will-change-transform overflow-hidden"
            >

              <motion.div 
                className="absolute inset-0 z-0 opacity-70 pointer-events-none"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  background: "linear-gradient(120deg, #fef08a, #bfdbfe, #fecaca, #fef08a)",
                  backgroundSize: "300% 300%",
                }}
              />

              {/* Menu Links Content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="flex flex-col z-10 max-w-7xl items-start w-full gap-4 mx-auto px-6 md:px-12 relative"
              >
                <MenuVertical
                  handleClick={(link) => {
                    setMenuOpen(false);
                    if (link.startsWith("http")) {
                        window.open(link, "_blank");
                    } else {
                        push(link);
                    }
                  }}
                  menuItems={routes}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}