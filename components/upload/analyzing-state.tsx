"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCw } from "lucide-react";

interface AnalyzingStateProps {
  isAnalyzing: boolean;
  error: string | null;
  onRetry: () => void;
}

export function AnalyzingState({ isAnalyzing, error, onRetry }: AnalyzingStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-[60vh]"
    >
      {isAnalyzing ? (
        <>
          <div className="relative w-24 h-24 mb-8">
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-2 rounded-full border-4 border-primary/30 border-t-transparent"
              animate={{ rotate: -180 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <h2 className="text-2xl font-semibold mb-3 text-primary">Analyzing Prescription</h2>
          <p className="text-center text-muted-foreground max-w-md">
            Our AI is carefully analyzing your prescription to create your personalized medication schedule
          </p>
        </>
      ) : error ? (
        <div className="text-center">
          <div className="mb-4 text-red-500">
            <AlertCircle className="w-12 h-12 mx-auto" />
          </div>
          <h2 className="text-2xl font-semibold mb-3 text-red-500">Analysis Failed</h2>
          <p className="text-center text-muted-foreground max-w-md mb-8">
            {error}
          </p>
          <Button
            size="lg"
            className="rounded-full bg-primary hover:bg-primary/90 px-8"
            onClick={onRetry}
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        </div>
      ) : null}
    </motion.div>
  );
}