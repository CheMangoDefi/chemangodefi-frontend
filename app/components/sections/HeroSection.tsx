'use client';

import { motion } from 'framer-motion';
import { ArrowRight, DollarSign, Play } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-yellow-300 via-orange-400 to-lime-300">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/50 via-orange-300/50 to-lime-200/50"></div>
      
      {/* Pill-shaped glassmorphism navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-full px-8 py-4 shadow-lg">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 relative">
                <Image
                  src="/logo.png"
                  alt="CheMango"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-gray-800">CheMango</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
              <button className="hover:text-gray-900 transition-colors">Why us</button>
              <button className="hover:text-gray-900 transition-colors">Opportunities</button>
              <button className="hover:text-gray-900 transition-colors">Features</button>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <button className="bg-white text-gray-700 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors text-sm font-medium border border-gray-300">
                Try it out!
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        <div className="text-center">
          
          {/* CheMango Mascot - Prominently centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex justify-center mb-8"
          >
            <motion.div
              animate={{ 
                rotate: [0, 2, -2, 0],
                y: [0, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-32 h-32 relative"
            >
              <Image
                src="/logo.png"
                alt="CheMango Mascot"
                width={128}
                height={128}
                className="object-contain drop-shadow-xl"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-tight mb-6"
            style={{
              textShadow: '0 4px 8px rgba(0,0,0,0.3), 0 8px 16px rgba(0,0,0,0.1)'
            }}
          >
            CheMango DeFi
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg sm:text-xl text-gray-800 leading-relaxed mb-10 max-w-2xl mx-auto font-medium"
            style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Acompañado se llega más lejos. Con CheMango, alcanzá tu metas 
            grupales de manera segura y efectiva.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-800 font-semibold text-lg px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg border border-gray-200"
            >
              <Play className="w-5 h-5" />
              Launch App
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-800 font-semibold text-lg px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-2"
            >
              See Docs
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}