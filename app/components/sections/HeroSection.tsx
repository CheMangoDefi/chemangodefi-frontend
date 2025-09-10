'use client';

import { motion } from 'framer-motion';
import { ArrowRight, DollarSign, Play } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* High-quality background image */}
      <div className="absolute inset-0">
        <Image
          src="/Hero Section bg.png"
          alt="CheMango DeFi hero background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
          sizes="100vw"
        />
      </div>
      
      {/* Subtle overlay for enhanced text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/10"></div>
      
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
                  alt="CheMango DeFi"
                  width={64}
                  height={64}
                  className="object-contain"
                  quality={100}
                  sizes="32px"
                />
              </div>
              <span className="font-bold text-black">CheMango</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[#333333]">
              <button className="hover:text-black transition-colors">Nosotros</button>
              <button className="hover:text-black transition-colors">Oportunidades</button>
              <button className="hover:text-black transition-colors">Características</button>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <button className="bg-gradient-to-r from-[#FFA94D] to-[#6ABF4B] text-white px-4 py-2 rounded-full hover:scale-105 transition-all duration-200 text-sm font-bold shadow-md hover:shadow-lg">
                Probalo!
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      
      {/* Main content container - centered vertically */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center relative">
          
          {/* CheMango Mascot - Positioned behind title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 z-0 -translate-y-6 sm:-translate-y-8 lg:-translate-y-10"
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
              className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 relative"
            >
              <Image
                src="/logo.png"
                alt="CheMango Mascot - Happy mango holding cash"
                width={512}
                height={512}
                className="object-contain drop-shadow-2xl"
                priority
                quality={100}
                sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM2QUJGNEJCJSB8MB8gMjAlIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iI0ZGQTk0REFBJTAiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0ZGNkIzNTUwJSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+Cjwvc3ZnPg=="
              />
            </motion.div>
          </motion.div>

          {/* Main heading - Now overlays the mascot */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative z-10 text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-tight mb-6 pt-12 sm:pt-16 lg:pt-20"
            style={{
              textShadow: '6px 6px 0px rgba(0,0,0,1), -1px -1px 0px rgba(0,0,0,1), 1px -1px 0px rgba(0,0,0,1), -1px 1px 0px rgba(0,0,0,1), 0 4px 8px rgba(0,0,0,0.3)'
            }}
          >
            CheMango DeFi
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-medium"
            style={{
              color: '#454545',
              // textShadow: '0 1px 2px rgba(255,255,255,0.8), 0 2px 4px rgba(0,0,0,0.1)'
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
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#FFA94D] to-[#6ABF4B] text-white font-bold text-lg px-8 py-4 rounded-full hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
              style={{
                textShadow: '0 1px 2px rgba(0,0,0,0.3)'
              }}
            >
              <Play className="w-5 h-5" />
              Empezar
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/80 backdrop-blur-lg border border-gray-200/50 text-black font-semibold text-lg px-8 py-4 rounded-full hover:bg-white/90 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
            >
              White paper
            </motion.button>
          </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}