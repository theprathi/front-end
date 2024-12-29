"use client";

import { motion } from "framer-motion";
import { Bell } from "lucide-react";

interface MedicineCardProps {
  medicine: {
    name: string;
    type: string;
    time: string;
    dosage: string;
    instruction: string;
  };
  index: number;
}

export function MedicineCard({ medicine, index }: MedicineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="p-4 glass-effect">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
            <Bell className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">{medicine.name}</h3>
              <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                {medicine.type}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {medicine.time} • {medicine.dosage} • {medicine.instruction}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}