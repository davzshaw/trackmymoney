"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  numberOfElements?: number;
}

export default function AnimatedBackground({ numberOfElements = 6 }: AnimatedBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(numberOfElements)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10 backdrop-blur-sm"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 30 - 15],
            x: [0, Math.random() * 30 - 15],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}