"use client";

import { Background } from "@/components/landing/background";
import { Leaf } from "lucide-react";
import { FeedbackSection } from "@/components/beta-announcement/feedback-section";

export default function BetaAnnouncementPage() {
  return (
    <main className="min-h-screen relative">
      <Background />
      <div className="container relative z-10 min-h-screen flex items-center justify-center px-4 mx-auto max-w-6xl">
        <div className="relative w-full mx-4">
          {/* Glassmorphic Background with lower opacity */}
          <div className="absolute inset-0 bg-white/20 backdrop-blur-lg rounded-3xl shadow-xl" />
          
          {/* Content with responsive padding */}
          <div className="relative p-6 sm:p-8 md:p-16 text-center">
            {/* Logo */}
            <div className="mb-8 sm:mb-12">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Leaf className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <h3 className="mt-4 text-xl sm:text-2xl font-bold text-primary">Prathi</h3>
            </div>

            {/* Coming Soon Text with adjusted line height and padding */}
            <div className="py-4">
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8 leading-[1.15] bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 text-transparent bg-clip-text">
                Coming Soon
              </h1>
            </div>

            {/* Thank You Message */}
            <p className="text-xl sm:text-2xl font-medium mb-6 sm:mb-8 bg-gradient-to-r from-primary to-teal-600 text-transparent bg-clip-text">
              Thank you for visiting Prathi
            </p>

            {/* Launch Info with responsive padding */}
            <div className="inline-block bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-emerald-100/20 shadow-lg">
              <span className="text-base sm:text-lg text-emerald-700 font-medium whitespace-nowrap">
                Android App Launch • Q1 2025
              </span>
            </div>
            {/* Feedback Section */}
            <FeedbackSection />
          </div>
        </div>
      </div>
    </main>
  );
}


// "use client";

// import { Background } from "@/components/landing/background";
// import { Leaf } from "lucide-react";
// import { FeedbackSection } from "@/components/beta-announcement/feedback-section";

// export default function BetaAnnouncementPage() {
//   return (
//     <main className="min-h-screen relative">
//       <Background />
//       <div className="container relative z-10 min-h-screen flex items-center justify-center px-4 mx-auto max-w-3xl">
//         <div className="relative w-full mx-4">
//           {/* Glassmorphic Background with lower opacity */}
//           <div className="absolute inset-0 bg-white/20 backdrop-blur-lg rounded-3xl shadow-xl" />
          
//           {/* Content with responsive padding */}
//           <div className="relative p-6 sm:p-8 md:p-16 text-center">
//             {/* Logo */}
//             <div className="mb-8 sm:mb-12">
//               <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
//                 <Leaf className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
//               </div>
//               <h3 className="mt-4 text-xl sm:text-2xl font-bold text-primary">Prathi</h3>
//             </div>

//             {/* Coming Soon Text with adjusted line height and padding */}
//             <div className="py-4">
//               <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8 leading-[1.15] bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 text-transparent bg-clip-text">
//                 Coming Soon
//               </h1>
//             </div>

//             {/* Thank You Message */}
//             <p className="text-xl sm:text-2xl font-medium mb-6 sm:mb-8 bg-gradient-to-r from-primary to-teal-600 text-transparent bg-clip-text">
//               Thank you for visiting Prathi
//             </p>

//             {/* Launch Info with responsive padding */}
//             <div className="inline-block bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-emerald-100/20 shadow-lg">
//               <span className="text-base sm:text-lg text-emerald-700 font-medium whitespace-nowrap">
//                 Android App Launch • Q4 2024
//               </span>
//             </div>

//             {/* Feedback Section */}
//             <FeedbackSection />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }