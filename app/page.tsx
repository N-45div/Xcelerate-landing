"use client";

import React from "react";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";
import { AnimatedSpan , Terminal , TypingAnimation } from "@/components/terminal";
import { WordRotate } from "@/components/ui/rotate";
import { VelocityScroll } from "@/components/ui/marquee";

export default function SparklesPreview() {
  return (
    <div className="h-[56rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="relative py-3 flex w-full flex-col items-center justify-center overflow-hidden">
      <VelocityScroll>Xcelerate the passive income with Sonic</VelocityScroll>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
       <WordRotate
      className="text-4xl font-bold text-black dark:text-white"
      words={["on-chain", "sonic"]}
    /> 
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
    <footer className="fixed bottom-0 w-full p-4 text-center text-white">
      <Link 
        href="https://x.com/xcelerate_sonic" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition-colors"
      >
        Follow us on X @xcelerate_sonic
      </Link>
    </footer>
    </div>
  );
}
