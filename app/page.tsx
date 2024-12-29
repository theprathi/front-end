// "use client";

// import { Background } from "@/components/landing/background";
// import { motion } from "framer-motion";

// import { Bell, Calendar, Clock, Shield, Brain, Heart, Users, Leaf, Star, Zap, Smile } from "lucide-react";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="min-h-screen relative overflow-hidden">
//       <Background />
      
//       <div className="container relative z-10 px-4 py-12 mx-auto max-w-4xl">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="flex flex-col items-center justify-center min-h-[60vh] text-center"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             className="mb-8"
//           >
//             <Leaf className="w-16 h-16 text-[#2E7D32] mx-auto mb-4" />
//           </motion.div>
          
//           <motion.h1 
//             className="text-6xl md:text-7xl font-bold text-[#2E7D32] mb-4"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             Prathi
//           </motion.h1>
//           <motion.p 
//             className="text-xl md:text-2xl text-gray-700 mb-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             Your Smart Medical Companion
//           </motion.p>
//           <motion.p
//             className="text-lg text-gray-600 mb-12 max-w-xl leading-relaxed"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             Let technology take care of your medication schedule while you focus on what matters most - your health and well-being.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//             className="space-y-4"
//           >
//             <Link
//               href="/upload"
//               className="inline-block bg-[#4CAF50] text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-[#43A047] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
//             >
//               Get Started
//             </Link>
//           </motion.div>
//         </motion.div>

//         <motion.div 
//           className="grid gap-6 mt-24 md:grid-cols-3"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//         >
//           {[
//             {
//               icon: Bell,
//               title: "Smart Reminders",
//               description: "Timely alerts that adapt to your routine"
//             },
//             {
//               icon: Calendar,
//               title: "Schedule Manager",
//               description: "Your personal medication timeline"
//             },
//             {
//               icon: Clock,
//               title: "Timing Tracker",
//               description: "Never miss a dose again"
//             }
//           ].map((feature, index) => (
//             <motion.div
//               key={feature.title}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7 + index * 0.1 }}
//               className="relative group"
//             >
//               <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/20 backdrop-blur-sm rounded-3xl transform transition-transform duration-300 group-hover:scale-105" />
//               <div className="relative p-8 text-center">
//                 <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#E8F5E9] flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
//                   <feature.icon className="w-8 h-8 text-[#4CAF50]" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-[#2E7D32] mb-3">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div 
//           className="mt-32 text-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//         >
//           <div className="inline-flex items-center justify-center space-x-2 mb-12">
//             <Star className="w-6 h-6 text-[#4CAF50]" />
//             <h2 className="text-3xl font-bold text-[#2E7D32]">The Prathi Experience</h2>
//           </div>
          
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {[
//               {
//                 icon: Shield,
//                 title: "Peace of Mind",
//                 description: "Your health data is protected with bank-grade security"
//               },
//               {
//                 icon: Brain,
//                 title: "AI Magic",
//                 description: "Intelligent analysis of your prescriptions"
//               },
//               {
//                 icon: Heart,
//                 title: "Care Connect",
//                 description: "Share schedules with family and caregivers"
//               }
//             ].map((benefit, index) => (
//               <motion.div
//                 key={benefit.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.9 + index * 0.1 }}
//                 className="p-6 rounded-2xl bg-white/30 backdrop-blur-sm hover:bg-white/40 transition-all duration-300 transform hover:-translate-y-1"
//               >
//                 <div className="w-14 h-14 mb-6 rounded-full bg-[#E8F5E9] flex items-center justify-center mx-auto">
//                   <benefit.icon className="w-7 h-7 text-[#4CAF50]" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-[#2E7D32] mb-3">{benefit.title}</h3>
//                 <p className="text-gray-600">{benefit.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         <motion.div
//           className="mt-32 mb-16 space-y-12"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1 }}
//         >
//           <div className="max-w-3xl mx-auto text-center">
//             <Zap className="w-12 h-12 text-[#4CAF50] mx-auto mb-6" />
//             <h2 className="text-3xl font-bold text-[#2E7D32] mb-6">Transform Your Health Journey</h2>
//             <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//               Join thousands who've discovered the secret to stress-free medication management. 
//               With Prathi, you're not just taking medicine - you're taking control.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-white/30 backdrop-blur-sm p-8 rounded-3xl">
//               <Smile className="w-10 h-10 text-[#4CAF50] mb-4" />
//               <h3 className="text-xl font-semibold text-[#2E7D32] mb-3">What Our Users Say</h3>
//               <p className="text-gray-600 italic">
//                 "Prathi has completely changed how I manage my medications. It's like having a personal 
//                 healthcare assistant in my pocket!"
//               </p>
//             </div>
//             <div className="bg-white/30 backdrop-blur-sm p-8 rounded-3xl">
//               <Star className="w-10 h-10 text-[#4CAF50] mb-4" />
//               <h3 className="text-xl font-semibold text-[#2E7D32] mb-3">Join Today</h3>
//               <p className="text-gray-600">
//                 Start your journey to better health management. It's free, simple, and could change 
//                 your life.
//               </p>
//               <Link
//                 href="/upload"
//                 className="inline-block mt-4 text-[#4CAF50] font-medium hover:text-[#43A047] transition-all duration-300"
//               >
//                 Get Started →
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </main>
//   );
// }
"use client";

import { Background } from "@/components/landing/background";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { VoiceNotifications } from "@/components/landing/voice-notifications";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Background />
      
      <div className="container relative z-10 px-6 py-10 mx-auto max-w-4xl">
        <Hero />
        <Features />
        <VoiceNotifications />
        
        {/* Added mb-16 to create space at the bottom */}
        <motion.div
          className="mt-4 mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            href="/upload"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-12 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[240px]"
          >
            <Sparkles className="w-5 h-5" />
            Get Started Now
          </Link>
        </motion.div>
      </div>
    </main>
  );
}