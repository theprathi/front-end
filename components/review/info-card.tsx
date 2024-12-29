"use client";

import { motion } from "framer-motion";
import { User, Hospital, Calendar, UserCircle, Building2, Stethoscope } from "lucide-react";

interface InfoCardProps {
  title: string;
  data: Record<string, string>;
}

export function InfoCard({ title, data }: InfoCardProps) {
  const getIcon = (key: string) => {
    switch (key) {
      case "Patient Name":
        return <User className="w-5 h-5 text-primary" />;
      case "Age":
        return <UserCircle className="w-5 h-5 text-primary" />;
      case "Gender":
        return <User className="w-5 h-5 text-primary" />;
      case "Hospital Name":
        return <Building2 className="w-5 h-5 text-primary" />;
      case "Doctor":
        return <Stethoscope className="w-5 h-5 text-primary" />;
      case "Consultation Date":
        return <Calendar className="w-5 h-5 text-primary" />;
      default:
        return <Hospital className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-effect p-4 sm:p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        {title.includes("Patient") ? (
          <div className="p-2 rounded-full bg-primary/10">
            <User className="w-5 h-5 text-primary" />
          </div>
        ) : (
          <div className="p-2 rounded-full bg-primary/10">
            <Hospital className="w-5 h-5 text-primary" />
          </div>
        )}
        <h2 className="text-lg font-semibold text-primary">{title}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.entries(data).map(([key, value]) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 p-3 rounded-xl bg-white/50 hover:bg-white/80 transition-all duration-300"
          >
            <div className="p-2 rounded-full bg-primary/5">
              {getIcon(key)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-500 truncate">{key}</p>
              <p className="font-medium truncate">
                {value === "NA" ? "Not Available" : value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}