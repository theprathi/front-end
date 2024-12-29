"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function FeaturePills() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative max-w-[500px] mx-auto my-16"
    >
      <div className="rounded-3xl bg-transparent p-8">
        <Image
          src="/pill-calendar.png"
          alt="Medicine Calendar"
          width={500}
          height={500}
          className="object-contain"
          priority
        />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
      </div>
    </motion.div>
  );
}