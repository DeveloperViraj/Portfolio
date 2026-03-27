"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const sizes = {
  xs: "text-lg",
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl",
  xl: "text-4xl",
  "2xl": "text-5xl",
};
export const Logo = ({
  size = "sm",
  className,
  containerClassName,
  draw,
}: {
  containerClassName?: string;
  size?: keyof typeof sizes;
  draw?: boolean;
}) => {
  return (
    <div className={cn("relative", containerClassName)}>
      <motion.div
        initial={draw ? { opacity: 0, y: 20 } : false}
        animate={draw ? { opacity: 1, y: 0 } : false}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          sizes[size],
          "font-newsreader italic tracking-tight text-gray-900",
          className
        )}
      >
        DeveloperViraj
      </motion.div>
    </div>
  );
};