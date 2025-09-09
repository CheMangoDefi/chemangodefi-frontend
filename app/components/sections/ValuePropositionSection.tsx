'use client';

import { motion } from 'framer-motion';

export default function ValuePropositionSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Why this dApp
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stop improvising with group money. Get a secure vault, a clear approval workflow, 
            and smart strategies that optimize returns with minimal effort and maximum security.
          </p>
        </motion.div>
      </div>
    </section>
  );
}