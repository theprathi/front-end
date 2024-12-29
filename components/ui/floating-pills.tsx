"use client";

import { motion } from "framer-motion";

export function FloatingPills() {
  return (
    <div className="absolute inset-0 -z-10">
      <motion.div
        className="absolute w-8 h-16 bg-[#FF9B9B] rounded-full"
        style={{ top: "20%", left: "20%" }}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-12 h-12 bg-[#B4E0D8] rounded-full"
        style={{ top: "40%", right: "25%" }}
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute w-10 h-10 bg-[#FFD699] rounded-full"
        style={{ bottom: "30%", left: "30%" }}
        animate={{
          y: [0, -25, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
    </div>
  );
}