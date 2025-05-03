"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, DollarSign, PiggyBank, Squirrel } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import Link from 'next/link';

export default function Page() {
  const [today, setToday] = useState('');
  
  useEffect(() => {
    setToday(new Date().toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-violet-800 to-emerald-500 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl">
        {/* Usando componente reutilizable para el fondo animado */}
        <AnimatedBackground numberOfElements={8} />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row w-full h-full bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/20"
        >
          {/* Left section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex-1 flex flex-col items-center justify-center p-8 lg:p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-transparent pointer-events-none" />
            
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative z-10 text-center space-y-6"
            >
              <div className="inline-block p-3 bg-white/10 backdrop-blur-md rounded-full mb-6">
                <DollarSign className="w-10 h-10 text-emerald-300" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight">
                Track My Money <span className="text-emerald-300">💸</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 max-w-md mx-auto">
                El espacio donde le tendrás rastreo a tu dinero de forma simple, segura y efectiva.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 pt-6">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                  <PiggyBank className="text-emerald-300 h-5 w-5" />
                  <span className="text-white">Ahorra más</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                  <Squirrel className="text-emerald-300 h-5 w-5" />
                  <span className="text-white">Ayuda de IA</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex-1 flex flex-col items-center justify-center p-8 lg:p-12 bg-white/5 backdrop-blur-md relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-purple-500" />
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="w-full max-w-md bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-xl"
            >
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl text-white font-bold">Bienvenido</h2>
                  <p className="text-white/70 mt-2 text-sm capitalize">{today || 'Cargando fecha...'}</p>
                </div>
                
                <div className="space-y-4 pt-2">
                  <Link href="/pages/sign-in">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      Iniciar Sesión
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                  
                  <Link href="/pages/sign-up">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-3.5 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      Registrarse
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </div>
                
                <div className="pt-4 text-center">
                  <Link 
                    href="/pages/sign-up" 
                    className="text-white text-sm hover:text-emerald-300 transition-colors duration-300 inline-flex items-center gap-1 font-medium"
                  >
                    ¿Aún no tienes cuenta? <span className="underline font-bold">¡Crea una ya mismo!</span>
                  </Link>
                </div>
              </div>
            </motion.div>
            
            <div className="mt-8 text-white/50 text-sm text-center">
              Seguro • Rápido • Intuitivo
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
