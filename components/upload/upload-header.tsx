"use client";

import { motion } from "framer-motion";

export function UploadHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 text-center"
    >
      <h1 className="text-3xl font-bold mb-3 text-primary">Upload Prescription</h1>
      <p className="text-muted-foreground max-w-md mx-auto">
        Let our AI analyze your prescription and set up your personalized medication schedule
      </p>
    </motion.div>
  );
}