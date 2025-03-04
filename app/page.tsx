"use client";

import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { AnimatedSpan , Terminal , TypingAnimation } from "@/components/terminal";

export default function SparklesPreview() {
  return (
    <div className="h-[56rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
       <h1 className="md:text-3xl py-10 text-3xl lg:text-9xl font-bold text-center text-white relative z-30">
          Xcelerate
      </h1>
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-screen"
          particleColor="#FFFFFF"
        />
      </div>
      <Terminal>
      <TypingAnimation>&gt; Install Sonic ($S) Supported wallet</TypingAnimation>
 
      <AnimatedSpan delay={1500} className="text-green-500">
        <span>✔ Preflight checks.</span>
      </AnimatedSpan>
 
      <AnimatedSpan delay={2000} className="text-green-500">
        <span>✔ Verifying the next gem.</span>
      </AnimatedSpan>
 
      <AnimatedSpan delay={2500} className="text-green-500">
        <span>✔ Validating Xcelerate to give clear signals.</span>
      </AnimatedSpan>
 
      <AnimatedSpan delay={3000} className="text-green-500">
        <span>✔ Validating Sonic community.</span>
      </AnimatedSpan>
 
      <AnimatedSpan delay={3500} className="text-green-500">
        <span>✔ Writing threads for the FOMO.</span>
      </AnimatedSpan>
 
      <AnimatedSpan delay={4000} className="text-green-500">
        <span>✔ Checking the new meme era.</span>
      </AnimatedSpan>
 
      <AnimatedSpan delay={4500} className="text-green-500">
        <span>✔ Updating with sonic world</span>
      </AnimatedSpan>
 
      <TypingAnimation delay={6500} className="text-muted-foreground">
        Success! The Social Agent initialized.
      </TypingAnimation>
 
      <TypingAnimation delay={7000} className="text-muted-foreground">
        You may now see the charts exploding.
      </TypingAnimation>
    </Terminal>
    <div className="flex flex-col pt-7 md:flex-row space-y-10 md:space-y-3 space-x-0 md:space-x-5">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm" >
          Follow on X
        </button>
      </div>
    </div>
  );
}
