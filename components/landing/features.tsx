"use client";

import { motion } from "framer-motion";
import { Bell, Calendar, Clock } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Never miss a dose"
    },
    {
      icon: Calendar,
      title: "Schedule Manager",
      description: "Organize your medications"
    },
    {
      icon: Clock,
      title: "Timing Tracker",
      description: "Track your medication history"
    }
  ];

  return (
    <motion.div 
      className="grid gap-6 mt-16 md:grid-cols-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      {features.map((feature, index) => (
        <div 
          key={feature.title}
          className="p-6 text-center bg-white/40 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:shadow-lg border border-white/20"
        >
          <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10">
            <feature.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="mb-2 font-semibold">{feature.title}</h3>
          <p className="text-sm text-muted-foreground">{feature.description}</p>
        </div>
      ))}
    </motion.div>
  );
}