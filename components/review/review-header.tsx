"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export function ReviewHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-8"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
        <FileText className="w-8 h-8 text-primary" />
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
        Review Your Medications
      </h1>
      <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
        We've analyzed your prescription. Please review the medications and adjust if needed.
      </p>
    </motion.div>
  );
}