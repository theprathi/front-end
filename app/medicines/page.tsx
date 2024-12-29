"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Image from "next/image";
import { MedicineIcon } from "@/components/shared/medicine-icon";
import { Navigation } from "@/components/shared/navigation";

interface Medicine {
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
  type: "tablet" | "capsule" | "liquid";
}

export default function MedicinesPage() {
  const [medicines, setMedicines] = useState<Medicine[]>([]);

  useEffect(() => {
    const storedMedicines = localStorage.getItem('approvedMedicines');
    if (storedMedicines) {
      const parsedMedicines = JSON.parse(storedMedicines);
      // Add type property if not present
      const medicinesWithType = parsedMedicines.map((med: Medicine) => ({
        ...med,
        type: med.type || (med.name.toLowerCase().includes('syrup') ? 'liquid' : 'tablet')
      }));
      setMedicines(medicinesWithType);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#E8F5E9] pb-24">
      <div className="container px-4 py-6 mx-auto max-w-2xl">
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

        <div className="relative mb-6">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search medicines..."
            className="w-full h-10 pl-10 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="space-y-4">
          {medicines.map((medicine, index) => (
            <motion.div
              key={medicine.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-4 flex items-center gap-4"
            >
              <MedicineIcon type={medicine.type} />
              <div className="flex-1">
                <h3 className="font-semibold">{medicine.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {medicine.quantity} • {medicine.beforeFood ? 'Before Food' : 'After Food'}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {[
                    medicine.dosage.morning && 'Morning',
                    medicine.dosage.afternoon && 'Afternoon',
                    medicine.dosage.night && 'Night'
                  ].filter(Boolean).join(' • ')}
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