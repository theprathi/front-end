"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface DurationScrollProps {
  value: number;
  onChange: (value: number) => void;
}

export function DurationScroll({ value, onChange }: DurationScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);
  const display = useTransform(y, latest => {
    // Reduce sensitivity by dividing the scroll value
    const newValue = value - Math.round(latest / 40);
    return Math.max(1, Math.min(90, newValue));
  });

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    let accumulatedDelta = 0;
    const threshold = 15; // Accumulate this much delta before changing value

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      // Accumulate the delta
      accumulatedDelta += e.deltaY;

      // Only update when we've accumulated enough scroll
      if (Math.abs(accumulatedDelta) >= threshold) {
        const direction = accumulatedDelta > 0 ? -1 : 1;
        const newValue = value + direction;

        // Reset accumulator
        accumulatedDelta = 0;

        // Update value if within bounds
        if (newValue >= 1 && newValue <= 90) {
          onChange(newValue);
          // Smooth animation for the reset
          animate(y, 0, { 
            duration: 0.5,
            ease: "easeOut"
          });
        }
      }
    };

    element.addEventListener('wheel', handleWheel, { passive: false });
    return () => element.removeEventListener('wheel', handleWheel);
  }, [value, onChange, y]);

  return (
    <div 
      ref={containerRef}
      className="inline-flex items-center gap-2 bg-white rounded-lg py-1.5 px-3 border border-gray-200 cursor-ns-resize select-none"
    >
      <div className="flex flex-col">
        <ChevronUp className="w-3 h-3 text-gray-400" />
        <ChevronDown className="w-3 h-3 text-gray-400" />
      </div>
      <motion.div className="text-center min-w-[3ch]">
        <motion.span className="text-lg font-medium text-primary">
          {display.get().toFixed(0)}
        </motion.span>
        <span className="ml-1 text-sm text-gray-600">days</span>
      </motion.div>
    </div>
  );
}