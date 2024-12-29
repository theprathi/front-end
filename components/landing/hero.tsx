// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { Leaf } from "lucide-react";

// export function Hero() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="flex flex-col items-center justify-center min-h-[50vh]"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.1 }}
//         className="mb-12 text-center"
//       >
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="mb-4"
//         >
//           <Leaf className="w-16 h-16 text-[#2E7D32] mx-auto" />
//         </motion.div>
//         <h1 className="text-7xl font-bold text-primary mb-3 tracking-tight">Prathi</h1>
//         <p className="text-xl text-muted-foreground">Your Medicine Companion</p>
//       </motion.div>

//       <Button 
//         asChild 
//         size="lg" 
//         className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
//       >
//         <Link href="/upload">Get Started</Link>
//       </Button>
//     </motion.div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Leaf, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center min-h-[50vh]"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-12 text-center"
      >
        <Leaf className="w-16 h-16 text-primary mx-auto mb-4" />
        <h1 className="text-7xl font-bold text-primary mb-3 tracking-tight">Prathi</h1>
        <p className="text-xl text-muted-foreground">
          Your{" "}
          <span className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text font-semibold">
            Smart
          </span>
          {" "}Medicine Companion
        </p>
      </motion.div>

      <Button 
        asChild 
        size="lg" 
        className="rounded-full px-12 py-6 bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 min-w-[240px]"
      >
        <Link href="/upload" className="flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5" />
          Get Started
        </Link>
      </Button>
    </motion.div>
  );
}