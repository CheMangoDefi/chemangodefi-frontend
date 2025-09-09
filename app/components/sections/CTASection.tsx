'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/3 to-transparent opacity-20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Ready to start investing{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-mango-200 to-orange-200">
              together?
            </span>
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join the future of collaborative investing. Secure, transparent, and fully under your group&apos;s control.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 193, 7, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 font-bold text-lg px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2 shadow-2xl"
            >
              Launch App
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 text-white font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all duration-200 backdrop-blur-sm"
            >
              View Documentation
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}