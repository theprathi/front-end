"use client";

import { motion } from "framer-motion";
import { Shield, Brain, Sparkles, Clock, Pill, Bell } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Prescription Safety",
      description: "Advanced AI scanning ensures accurate medication information extraction"
    },
    {
      icon: Brain,
      title: "Smart Analytics",
      description: "Track adherence patterns and get insights about your medication routine"
    },
    {
      icon: Sparkles,
      title: "Personalized Experience",
      description: "Customizable reminders based on your lifestyle and preferences"
    },
    {
      icon: Clock,
      title: "Time-Based Reminders",
      description: "Get notified at the perfect time, whether before or after meals"
    },
    {
      icon: Pill,
      title: "Medication Insights",
      description: "Learn about your medications, including potential interactions"
    },
    {
      icon: Bell,
      title: "Family Sharing",
      description: "Help family members stay on track with their medications"
    }
  ];

  return (
    <div className="mt-24 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Why Choose Prathi?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Experience the future of medication management with our intelligent companion that keeps you healthy and on track.
        </p>
      </motion.div>

      <motion.div 
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="p-6 glass-effect hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-16"
      >
        <p className="text-lg text-primary font-medium mb-4">
          Join thousands of users who trust Prathi
        </p>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          Our intelligent prescription scanning technology and intuitive interface make managing medications effortless. 
          Start your journey to better medication management today.
        </p>
      </motion.div>
    </div>
  );
}