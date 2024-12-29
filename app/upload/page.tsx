"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Background } from "@/components/landing/background";
import { UploadHeader } from "@/components/upload/upload-header";
import { UploadZone } from "@/components/upload/upload-zone";
import { UploadConfirmation } from "@/components/upload/upload-confirmation";
import { AnalyzingState } from "@/components/upload/analyzing-state";
import { useToast } from "@/contexts/toast-context";
import { uploadPrescription } from "@/lib/api/prescription";

export default function UploadPage() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { addToast } = useToast();

  const handleUploadComplete = (file: File) => {
    setUploadedFile(file);
    setIsConfirming(true);
    setError(null);
  };

  const handleConfirmUpload = async () => {
    if (!uploadedFile) {
      addToast("Please upload a prescription first", "error");
      return;
    }

    setIsConfirming(false);
    setIsAnalyzing(true);

    try {
      const result = await uploadPrescription(uploadedFile);
      console.log(result)
      if (result) {
        router.push("/review/"+result.store_status.patient_id);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to analyze prescription';
      setError(errorMessage);
      addToast(errorMessage, "error");
      setIsAnalyzing(false);
    }
  };

  const handleCancel = () => {
    setUploadedFile(null);
    setIsConfirming(false);
    setError(null);
  };

  return (
    <main className="min-h-screen">
      <Background />
      <div className="container relative z-10 px-4 py-12 mx-auto max-w-2xl">
        {!uploadedFile && (
          <>
            <UploadHeader />
            <UploadZone onUploadComplete={handleUploadComplete} />
          </>
        )}

        {uploadedFile && isConfirming && (
          <UploadConfirmation
            file={uploadedFile}
            onConfirm={handleConfirmUpload}
            onCancel={handleCancel}
          />
        )}

        {uploadedFile && isAnalyzing && (
          <AnalyzingState
            isAnalyzing={isAnalyzing}
            error={error}
            onRetry={handleConfirmUpload}
          />
        )}
      </div>
    </main>
  );
}