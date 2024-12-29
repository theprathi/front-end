"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="relative grid items-center gap-12 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center md:text-left"
      >
        {/* <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
          Be in control of
          <span className="block text-teal-500">your meds</span>
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          An easy-to-use and reliable app that helps you remember to take your meds at the right time.
        </p> */}
        <Button 
          size="lg" 
          className="bg-teal-600 hover:bg-teal-600"
          asChild
        >
          <Link href="/upload">Get started now</Link>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative aspect-square max-w-[500px] mx-auto"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 to-teal-100/30 rounded-3xl" />
        <Image
          src="/pill-calendar.png"
          alt="Medicine Calendar"
          width={500}
          height={500}
          className="object-contain p-8"
        />
      </motion.div>
    </div>
  );
}