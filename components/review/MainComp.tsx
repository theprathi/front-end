
"use client";

import { useToast } from "@/contexts/toast-context";
import { analyzePrescription } from "@/lib/api";
import { transformMedicationData } from "@/lib/services/prescription";
import { PrescriptionResponse } from "@/lib/types/prescription";
import { motion, AnimatePresence } from "framer-motion";
import router from "next/router";
import { useState, useEffect } from "react";
import { Background } from "../landing/background";
import { MedicineReviewCard } from "./medicine-review-card";
import { ReviewHeader } from "./review-header";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type MainCompProps = {
    id: string
}
export default function MainComp({id}:MainCompProps){
    const router = useRouter();
    const { addToast } = useToast();
    const [prescriptionData, setPrescriptionData] = useState<PrescriptionResponse | null>(null);
    const [medicines, setMedicines] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await analyzePrescription(id);
          setPrescriptionData(data);
          setMedicines(transformMedicationData(data.parsed_response["Medication Details"]));
        } catch (error) {
          addToast("Failed to load prescription data", "error");
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, [addToast]);
  
    const handleDelete = (id: number) => {
      setMedicines((prev) => prev.filter((med) => med.id !== id));
    };
  
    const handleApprove = () => {
      if (medicines.length === 0) {
        addToast("Please add at least one medicine to approve", "error");
        return;
      }
  
      // Validate that each medicine has at least one dosage time selected
      const isValid = medicines.every((medicine) => Object.values(medicine.dosage).some((value) => value));
  
      if (!isValid) {
        addToast("Please select at least one dosage time for each medicine", "error");
        return;
      }
  
      // Store medicines in localStorage
      localStorage.setItem("approvedMedicines", JSON.stringify(medicines));
      // router.push("/medicines");
       router.push("/beta-anouncement");
    };
  
    const handleCancel = () => {
      router.push("/");
    };
  
    if (isLoading || !prescriptionData) {
      return (
        <main className="min-h-screen relative">
          <Background />
          <div className="container relative z-10 px-4 py-8 mx-auto max-w-2xl flex items-center justify-center min-h-screen">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-primary font-medium">Loading prescription data...</p>
            </div>
          </div>
        </main>
      );
    }
  
    const { "Patient Details": patientDetails, "Hospital Details": hospitalDetails } = prescriptionData.parsed_response;
  
    return (
      <main className="min-h-screen relative pb-24">
        <Background />
        <div className="container relative z-10 px-4 py-8 mx-auto max-w-2xl">
          <ReviewHeader />
  
          <div className="space-y-4 mb-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              {/* <InfoCard title="Patient Information" data={patientDetails} /> */}
            </motion.div>
  
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              {/* <InfoCard title="Hospital Information" data={hospitalDetails} /> */}
            </motion.div>
          </div>
  
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-4">
            <h2 className="text-lg font-semibold text-primary flex items-center gap-2">
              <span className="inline-block p-1 rounded-full bg-primary/10">💊</span>
              Prescribed Medicines
            </h2>
          </motion.div>
  
          <AnimatePresence>
            <motion.div className="space-y-4 mb-24">
              {medicines.map((medicine) => (
                <MedicineReviewCard
                  key={medicine.id}
                  medicine={medicine}
                  onUpdate={(updatedMedicine) => {
                    setMedicines((prev) => prev.map((med) => (med.id === updatedMedicine.id ? updatedMedicine : med)));
                  }}
                  onDelete={handleDelete}
                />
              ))}
            </motion.div>
          </AnimatePresence>
  
          {/* <motion.div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t" initial={{ y: 100 }} animate={{ y: 0 }} transition={{ delay: 0.4 }}> */}
            <div className="container max-w-2xl mx-auto flex gap-3">
              <Button variant="outline" className="flex-1 rounded-full py-6 border-2 hover:bg-gray-50" onClick={handleCancel}>
                Cancel
              </Button>
              <Button className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-full py-6 shadow-lg hover:shadow-xl transition-all duration-300" onClick={handleApprove}>
                Approve & Create Reminders
              </Button>
            </div>
          {/* </motion.div> */}
        </div>
      </main>
    );
}