"use client";
import React from 'react';
import { motion } from 'framer-motion';
import UserButton from '@/components/UserButton';
import UserProfile from '@/components/UserProfile';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-violet-800 to-emerald-500 p-4 md:p-8 relative">
      <div className="absolute top-0 right-0 p-6 flex items-center gap-4 z-10">
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 flex items-center gap-4">
          <UserProfile />
          <UserButton />
        </div>
      </div>
      
      <AnimatedBackground numberOfElements={8} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center min-h-screen"
      >
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl max-w-2xl w-full text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
            Dashboard
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Bienvenido a tu panel de control financiero personal
          </p>
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg">
            <p className="text-white">
              Aquí podrás ver un resumen de tus finanzas y gestionar tus gastos e ingresos
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}