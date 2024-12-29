"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";

interface DurationSelectorProps {
  duration: number;
  onChange: (duration: number) => void;
}

export function DurationSelector({ duration, onChange }: DurationSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const durations = [3, 5, 7, 10, 14, 21, 28, 30];

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full rounded-xl bg-white border border-gray-200 hover:bg-gray-50"
      >
        <span className="flex-1">{duration} days</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 ml-2" />
        ) : (
          <ChevronDown className="w-4 h-4 ml-2" />
        )}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
          >
            <div className="max-h-48 overflow-y-auto py-1">
              {durations.map((value) => (
                <motion.button
                  key={value}
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                  onClick={() => {
                    onChange(value);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left ${
                    duration === value ? "bg-primary/10 text-primary" : ""
                  }`}
                >
                  {value} days
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}