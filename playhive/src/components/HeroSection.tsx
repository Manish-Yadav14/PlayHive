"use client";

import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { useRouter } from "next/router";

export default function HeroSection() {
  const router = useRouter();
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
        <button onClick={()=>router.push('/games')} className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px]">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black px-3 py-1 text-lg font-medium text-white backdrop-blur-3xl">
            Play Now
          </span>
        </button>
      </BackgroundLines>
    </div>
  );
}
