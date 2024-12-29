"use client";

import { motion } from "framer-motion";

interface MedicineIconProps {
  type?: "tablet" | "capsule" | "liquid";
  color?: string;
  size?: "sm" | "md" | "lg";
}

export function MedicineIcon({ 
  type = "tablet", 
  color = "#4CAF50",
  size = "md" 
}: MedicineIconProps) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };

  const iconVariants = {
    tablet: (
      <svg viewBox="0 0 24 24" fill="none" className={sizes[size]}>
        <motion.circle
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          cx="12"
          cy="12"
          r="8"
          stroke={color}
          strokeWidth="2"
          fill="white"
        />
        <motion.line
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          x1="8"
          y1="12"
          x2="16"
          y2="12"
          stroke={color}
          strokeWidth="2"
        />
      </svg>
    ),
    capsule: (
      <svg viewBox="0 0 24 24" fill="none" className={sizes[size]}>
        <motion.rect
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          x="6"
          y="8"
          width="12"
          height="8"
          rx="4"
          fill="white"
          stroke={color}
          strokeWidth="2"
        />
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          d="M6 12h6v4a4 4 0 01-4-4h-2z"
          fill={color}
        />
      </svg>
    ),
    liquid: (
      <svg viewBox="0 0 24 24" fill="none" className={sizes[size]}>
        <motion.path
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          d="M8 7a2 2 0 012-2h4a2 2 0 012 2v7a4 4 0 11-8 0V7z"
          stroke={color}
          strokeWidth="2"
          fill="white"
        />
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          d="M8 14a4 4 0 008 0v-2H8v2z"
          fill={color}
        />
      </svg>
    )
  };

  return (
    <div className="flex items-center justify-center bg-primary/5 rounded-xl p-2.5">
      {iconVariants[type]}
    </div>
  );
}