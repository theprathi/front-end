"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThumbsUp, ThumbsDown, Flower, Cloud } from "lucide-react";
import confetti from "canvas-confetti";

export function FeedbackSection() {
  const [likes, setLikes] = useState(10); // Starting with some initial likes
  const [userFeedback, setUserFeedback] = useState<"like" | "dislike" | null>(null);
  const [showAnimation, setShowAnimation] = useState(false);

  const handleLike = () => {
    if (userFeedback !== "like") {
      setLikes(prev => prev + 1);
      setUserFeedback("like");
      setShowAnimation(true);
      
      // Trigger flower confetti
      const colors = ["#A5D6A7", "#81C784", "#4CAF50"];
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors,
        shapes: ["circle"],
        scalar: 2
      });

      setTimeout(() => setShowAnimation(false), 2000);
    }
  };

  const handleDislike = () => {
    if (userFeedback !== "dislike") {
      setUserFeedback("dislike");
      setShowAnimation(true);
      setTimeout(() => setShowAnimation(false), 2000);
    }
  };

  return (
    <div className="mt-8 text-center relative">
      <AnimatePresence>
        {showAnimation && userFeedback === "like" && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ 
                  opacity: 0,
                  scale: 0,
                  x: Math.random() * 200 - 100,
                  y: Math.random() * 200 - 100
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: Math.random() * 400 - 200,
                  y: Math.random() * -400
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1
                }}
              >
                <Flower className="w-6 h-6 text-primary" />
              </motion.div>
            ))}
          </motion.div>
        )}

        {showAnimation && userFeedback === "dislike" && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [-20, -40],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3
                }}
              >
                <Cloud className="w-8 h-8 text-gray-400" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-center gap-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLike}
          className={`p-3 rounded-full transition-colors ${
            userFeedback === "like"
              ? "bg-primary text-white"
              : "bg-white/50 hover:bg-white/70"
          }`}
        >
          <ThumbsUp className="w-6 h-6" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDislike}
          className={`p-3 rounded-full transition-colors ${
            userFeedback === "dislike"
              ? "bg-gray-800 text-white"
              : "bg-white/50 hover:bg-white/70"
          }`}
        >
          <ThumbsDown className="w-6 h-6" />
        </motion.button>
      </div>

      {userFeedback === "like" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-primary font-medium"
        >
          {likes} people liked this
        </motion.div>
      )}

      {userFeedback === "dislike" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-gray-600"
        >
          Thanks for your feedback
        </motion.div>
      )}
    </div>
  );
}