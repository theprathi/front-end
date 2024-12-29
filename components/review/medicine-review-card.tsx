"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Pill, CalendarDays, Clock, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DurationScroll } from "./duration-scroll";

interface MedicineReviewCardProps {
  medicine: {
    id: number;
    name: string;
    dosage: {
      morning: boolean;
      afternoon: boolean;
      night: boolean;
    };
    duration: number;
    beforeFood: boolean;
    afterFood: boolean;
    quantity: string;
  };
  onUpdate: (medicine: any) => void;
  onDelete: (id: number) => void;
}

export function MedicineReviewCard({ medicine, onUpdate, onDelete }: MedicineReviewCardProps) {
  const toggleDosage = (time: 'morning' | 'afternoon' | 'night') => {
    const newDosage = {
      ...medicine.dosage,
      [time]: !medicine.dosage[time]
    };
    
    if (Object.values(newDosage).some(value => value)) {
      onUpdate({ ...medicine, dosage: newDosage });
    }
  };

  const toggleFoodTiming = (isBefore: boolean) => {
    onUpdate({
      ...medicine,
      beforeFood: isBefore,
      afterFood: !isBefore
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="glass-effect hover:shadow-lg transition-all duration-300 relative mx-2 sm:mx-0"
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 hover:bg-red-50 hover:text-red-500 transition-colors"
        onClick={() => onDelete(medicine.id)}
      >
        <Trash2 className="w-5 h-5" />
      </Button>

      <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
        <div className="flex items-center gap-4 pr-8">
          <div className="bg-primary/10 p-3 rounded-xl">
            <Pill className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{medicine.name}</h3>
            <p className="text-sm text-gray-500">{medicine.quantity}</p>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary/70" />
            Dosage Timing
          </label>
          <div className="flex flex-wrap sm:flex-nowrap gap-2">
            {['morning', 'afternoon', 'night'].map((time) => (
              <Button
                key={time}
                variant={medicine.dosage[time as keyof typeof medicine.dosage] ? "default" : "outline"}
                className={`flex-1 rounded-full text-sm py-4 ${
                  medicine.dosage[time as keyof typeof medicine.dosage]
                    ? 'bg-primary hover:bg-primary/90 text-white shadow-md'
                    : 'hover:bg-primary/5'
                }`}
                onClick={() => toggleDosage(time as 'morning' | 'afternoon' | 'night')}
              >
                {time.charAt(0).toUpperCase() + time.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-700">Food Timing</label>
          <div className="flex flex-wrap sm:flex-nowrap gap-2">
            <Button
              variant={medicine.beforeFood ? "default" : "outline"}
              className={`flex-1 rounded-full text-sm py-4 ${
                medicine.beforeFood
                  ? 'bg-primary hover:bg-primary/90 text-white shadow-md'
                  : 'hover:bg-primary/5'
              }`}
              onClick={() => toggleFoodTiming(true)}
            >
              Before Food
            </Button>
            <Button
              variant={medicine.afterFood ? "default" : "outline"}
              className={`flex-1 rounded-full text-sm py-4 ${
                medicine.afterFood
                  ? 'bg-primary hover:bg-primary/90 text-white shadow-md'
                  : 'hover:bg-primary/5'
              }`}
              onClick={() => toggleFoodTiming(false)}
            >
              After Food
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-primary/70" />
            Duration
          </label>
          <DurationScroll
            value={medicine.duration}
            onChange={(duration) => onUpdate({ ...medicine, duration })}
          />
        </div>
      </div>
    </motion.div>
  );
}