"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Check, Bell } from "lucide-react";
import Image from "next/image";
import { Navigation } from "@/components/shared/navigation";

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i - 3);
    return date;
  });

  return (
    <main className="min-h-screen bg-[#E8F5E9] p-6 pb-24">
      <div className="container max-w-2xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-xl font-semibold">👋 Hey, Margaret</h1>
          </div>
          <div className="w-10 h-10 overflow-hidden rounded-full">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              alt="Profile"
              width={40}
              height={40}
            />
          </div>
        </header>

        <div className="mb-8">
          <h2 className="text-lg font-medium mb-4">September 2022</h2>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {dates.map((date, index) => (
              <motion.div
                key={date.toISOString()}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col items-center p-3 rounded-full min-w-[60px] ${
                  date.getDate() === selectedDate.getDate()
                    ? "bg-primary text-white"
                    : "bg-white"
                }`}
                onClick={() => setSelectedDate(date)}
              >
                <span className="text-xs">{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                <span className="text-lg font-semibold">{date.getDate()}</span>
                {index < 4 && <Check className="w-4 h-4 mt-1" />}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold mb-4">Today you should take:</h3>
          {[
            { time: "08:00 AM", name: "Aspirin", pills: "2 pills", instruction: "Before eating" },
            { time: "10:00 AM", name: "Claritin", pills: "1 pill", instruction: "After eating" },
            { time: "01:30 PM", name: "Ampicillin", pills: "1 pill", instruction: "After eating" }
          ].map((med, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-4 flex items-center gap-4"
            >
              <div className="bg-primary/10 p-3 rounded-xl">
                <Bell className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{med.time}</span>
                </div>
                <h4 className="font-medium">{med.name}</h4>
                <p className="text-sm text-gray-500">
                  {med.pills} • {med.instruction}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Navigation />
    </main>
  );
}