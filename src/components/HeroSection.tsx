// "use client";

// import { Vortex } from "./ui/vortex";
 
// import { motion } from "framer-motion";
// import { AuroraBackground } from "./ui/aurora-background";

// function HeroSection() {
//   return (
//     <div
//     className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
//     >
//       <Vortex 
//         backgroundColor="black"
//         className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
//       >
//         <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
//           Ready to jump in? <br/>
//           Start a game in seconds.
//         </h2> 
//         <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
//           Compete for the top spot and show your friends who&apos;s boss.
//         </p>
//         <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
//           {/* <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
//             Play Now!
//           </button> */}
//           <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px]">
//             <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
//             <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black px-3 py-1 text-lg font-medium text-white backdrop-blur-3xl">
//               Play Now
//             </span>
//           </button>
//         </div> 
//       </Vortex> 
    
//     </div>
//   )
// }

// export default HeroSection

"use client";

import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function HeroSection() {
  return (
    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-8 relative z-20 font-bold tracking-tight">
          Ready to jump in? <br/> Start a game in seconds.
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center pb-2 md:pb-8">
          Compete for the top spot and show your friends who&apos;s boss.
        </p>
        <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px]">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black px-3 py-1 text-lg font-medium text-white backdrop-blur-3xl">
            Play Now
          </span>
        </button>
      </BackgroundLines>
    </div>
  );
}