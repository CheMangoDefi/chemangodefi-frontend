'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = validateEmail(email);
    setIsValid(valid);
    
    if (valid) {
      // Handle successful email submission here
      console.log('Email submitted:', email);
      // You can add API call or form submission logic here
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!isValid) setIsValid(true); // Reset validation state when user starts typing
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Hero Section background image */}
      <div className="absolute inset-0">
        <Image
          src="/Hero Section bg.png"
          alt="CheMango DeFi background"
          fill
          className="object-cover object-center"
          quality={90}
          sizes="100vw"
        />
      </div>
      
      {/* Enhanced overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/15 via-black/5 to-black/20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Main header with exact HeroSection styling */}
          <h2 
            className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-tight"
            style={{
              textShadow: '6px 6px 0px rgba(0,0,0,1), -1px -1px 0px rgba(0,0,0,1), 1px -1px 0px rgba(0,0,0,1), -1px 1px 0px rgba(0,0,0,1), 0 4px 8px rgba(0,0,0,0.3)'
            }}
          >
            ¿Listos para{' '}
              ahorrar juntos?
          </h2>
          
          {/* Subtitle with updated color */}
          <p className="text-xl max-w-2xl mx-auto font-medium" style={{ color: '#454545' }}>
            Sumate a la revolución del ahorro grupal. Seguro, transparente y completamente bajo el control de tu grupo.
          </p>

          {/* Email input with inline button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center pt-8"
          >
            <motion.form
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="w-full max-w-md"
            >
              <div className="relative">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Ingresá tu email"
                  className={`w-full px-6 py-5 pr-32 text-lg text-[#454545] rounded-full bg-white/95 backdrop-blur-lg border-2 transition-all duration-300 focus:outline-none focus:ring-0 shadow-xl ${
                    isValid 
                      ? 'border-gray-200/50 focus:border-[#FFA94D]' 
                      : 'border-red-400 focus:border-red-500'
                  }`}
                  required
                  aria-label="Ingresa tu email para unirte a la lista de espera"
                />
                
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(255, 169, 77, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#FFA94D] to-[#6ABF4B] text-white font-bold px-6 py-3 rounded-full hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                  style={{
                    textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                  }}
                  aria-label="Enviar email para unirse a la lista de espera"
                >
                  Sumarme
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
              
              {/* Error message */}
              {!isValid && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm mt-2 text-center font-medium"
                >
                  Por favor ingresa un email válido
                </motion.p>
              )}
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}