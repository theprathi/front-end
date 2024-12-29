"use client";

import { motion } from "framer-motion";
import { Heart, Bell, Volume2, Phone, MessageCircle } from "lucide-react";

export function VoiceNotifications() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-10 md:py-15"
    >
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center justify-center gap-2 mb-4"
        >
          <Heart className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold text-primary">A Personal Touch</h2>
        </motion.div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Hear reminders from the voices you love most
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {[
          {
            icon: Bell,
            title: "Gentle Reminder",
            description: "Starts with a soft notification to remind you about your medicine"
          },
          {
            icon: Volume2,
            title: "Voice of Care",
            description: "Plays a personalized voice message from your loved ones calling your name"
          },
          {
            icon: Phone,
            title: "Caring Follow-up",
            description: "Ensures you never miss a dose with customized voice alarms"
          }
        ].map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-3xl border border-white/20 transform transition-transform duration-300 group-hover:scale-105" />
            <div className="relative p-6 text-center"> {/* Reduced padding */}
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white/80 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 shadow-lg"> {/* Reduced size and margin */}
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center"
      >
        <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20">
          <MessageCircle className="w-5 h-5 text-primary" />
          <span>
            <span className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text font-medium">
              "Time for your medicine, dear"
            </span>
            <span className="text-primary font-medium"> - Mom's voice</span>
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}