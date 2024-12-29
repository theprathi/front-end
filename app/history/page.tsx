"use client";

import { Navigation } from "@/components/shared/navigation";
import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import Image from "next/image";

export default function HistoryPage() {
  const history = [
    { date: "Today", medicines: [
      { name: "Aspirin", taken: true, time: "08:00 AM" },
      { name: "Claritin", taken: true, time: "10:00 AM" },
      { name: "Ampicillin", taken: false, time: "01:30 PM" }
    ]},
    { date: "Yesterday", medicines: [
      { name: "Aspirin", taken: true, time: "08:00 AM" },
      { name: "Claritin", taken: true, time: "10:00 AM" },
      { name: "Ampicillin", taken: true, time: "01:30 PM" }
    ]}
  ];

  return (
    <main className="min-h-screen bg-[#E8F5E9] p-6">
      <div className="container max-w-2xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-xl font-semibold">Medicine History</h1>
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

        <div className="space-y-6">
          {history.map((day, dayIndex) => (
            <motion.div
              key={day.date}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: dayIndex * 0.1 }}
            >
              <h2 className="text-lg font-medium mb-4">{day.date}</h2>
              <div className="space-y-3">
                {day.medicines.map((medicine, medIndex) => (
                  <motion.div
                    key={`${medicine.name}-${medIndex}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (dayIndex + medIndex) * 0.1 }}
                    className="bg-white rounded-2xl p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      {medicine.taken ? (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-500" />
                      )}
                      <div>
                        <h3 className="font-medium">{medicine.name}</h3>
                        <p className="text-sm text-gray-500">{medicine.time}</p>
                      </div>
                    </div>
                    <span className={`text-sm ${medicine.taken ? 'text-green-500' : 'text-red-500'}`}>
                      {medicine.taken ? 'Taken' : 'Missed'}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Navigation />
    </main>
  );
}