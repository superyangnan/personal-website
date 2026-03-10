"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PhoneMockupProps {
  src: string;
  alt: string;
  title: string;
  className?: string;
}

export default function PhoneMockup({ src, alt, title, className = "" }: PhoneMockupProps) {
  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      {/* Phone Case */}
      <motion.div 
        className="relative w-[220px] aspect-[9/19] rounded-[36px] border-[6px] border-[#374151] bg-[#1F2937] shadow-[0_25px_50px_rgba(0,0,0,0.4)] overflow-hidden"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Screen Content */}
        <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-white">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 220px"
          />
          
          {/* Fallback Overlay (if image fails or is placeholder) */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#e0f2fe] to-[#ffffff] -z-10 flex items-center justify-center p-4 text-center">
            <span className="text-slate-400 text-xs">{alt}</span>
          </div>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-10"></div>
      </motion.div>

      {/* Title */}
      <motion.p 
        className="text-slate-400 text-sm font-medium text-center max-w-[200px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.p>
    </div>
  );
}
