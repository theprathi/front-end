"use client";

import { Navigation } from "@/components/shared/navigation";
import { motion } from "framer-motion";
import { Bell, Clock, Moon, Sun, Volume2, Languages, HelpCircle } from "lucide-react";
import Image from "next/image";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-[#E8F5E9] p-6">
      <div className="container max-w-2xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-xl font-semibold">Settings</h1>
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
          {[
            { icon: Bell, title: "Notifications", description: "Manage your alerts" },
            { icon: Clock, title: "Reminder Times", description: "Set preferred times" },
            { icon: Volume2, title: "Sound & Vibration", description: "Customize alerts" },
            { icon: Languages, title: "Language", description: "Change app language" },
            { icon: Moon, title: "Dark Mode", description: "Toggle appearance" },
            { icon: HelpCircle, title: "Help & Support", description: "Get assistance" }
          ].map((setting, index) => (
            <motion.div
              key={setting.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-4 flex items-center gap-4"
            >
              <div className="bg-primary/10 p-3 rounded-xl">
                <setting.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="font-medium">{setting.title}</h2>
                <p className="text-sm text-gray-500">{setting.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Navigation />
    </main>
  );
}