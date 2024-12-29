"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, FileText, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/contexts/toast-context";

interface UploadZoneProps {
  onUploadComplete: (file: File) => void;
}

export function UploadZone({ onUploadComplete }: UploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const { addToast } = useToast();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Validate file type
    const validTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
    if (!validTypes.includes(file.type)) {
      addToast("Please upload a PDF or image file (JPG, PNG)", "error");
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      addToast("File size should be less than 10MB", "error");
      return;
    }

    onUploadComplete(file);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div
        className={cn(
          "p-8 rounded-3xl transition-all duration-300 glass-effect",
          isDragging ? "ring-2 ring-primary/20 border-primary" : ""
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="p-6 rounded-full bg-primary/10">
            <Upload className="w-10 h-10 text-primary" />
          </div>
          <div className="space-y-2">
            <p className="text-xl font-medium">Drop your prescription here</p>
            <p className="text-sm text-muted-foreground">
              or select a file from your device
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <input
              type="file"
              id="fileInput"
              className="hidden"
              accept=".pdf,.png,.jpg,.jpeg"
              onChange={handleFileSelect}
              disabled={isUploading}
            />
            <Button 
              size="lg"
              className="rounded-full bg-primary/90 hover:bg-primary"
              onClick={() => document.getElementById('fileInput')?.click()}
              disabled={isUploading}
            >
              <FileText className="w-4 h-4 mr-2" /> Choose PDF
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-full"
              onClick={() => document.getElementById('fileInput')?.click()}
              disabled={isUploading}
            >
              <ImageIcon className="w-4 h-4 mr-2" /> Choose Image
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}