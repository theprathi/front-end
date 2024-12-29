"use client";

import { motion } from "framer-motion";
import { FileText, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UploadConfirmationProps {
  file: File;
  onConfirm: () => void;
  onCancel: () => void;
}

export function UploadConfirmation({ file, onConfirm, onCancel }: UploadConfirmationProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-[60vh]"
    >
      <div className="p-6 rounded-full bg-primary/10 mb-8">
        <FileText className="w-12 h-12 text-primary" />
      </div>
      
      <h2 className="text-2xl font-semibold mb-3 text-primary">Confirm Upload</h2>
      <p className="text-center text-muted-foreground max-w-md mb-4">
        You've selected <span className="font-medium text-primary">{file.name}</span>
      </p>
      <p className="text-center text-muted-foreground max-w-md mb-8">
        Would you like to proceed with analyzing this prescription?
      </p>

      <div className="flex gap-4">
        <Button
          variant="outline"
          size="lg"
          className="rounded-full px-8"
          onClick={onCancel}
        >
          <X className="w-4 h-4 mr-2" />
          Cancel
        </Button>
        <Button
          size="lg"
          className="rounded-full bg-primary hover:bg-primary/90 px-8"
          onClick={onConfirm}
        >
          <Check className="w-4 h-4 mr-2" />
          Confirm & Analyze
        </Button>
      </div>
    </motion.div>
  );
}