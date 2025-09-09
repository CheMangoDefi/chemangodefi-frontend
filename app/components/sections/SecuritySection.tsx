'use client';

import { motion } from 'framer-motion';
import { Shield, Eye, Activity, HardHat } from 'lucide-react';

export default function SecuritySection() {
  const features = [
    {
      title: "Non‑Custodial",
      description: "Funds sit in smart contracts controlled by your multisig.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Deterministic Rules",
      description: "Thresholds and permissions encoded on‑chain.",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "Risk‑Aware Execution", 
      description: "Strategy limits and automated checks reduce human error.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Hardware Wallet Friendly",
      description: "Use preferred wallets for approvals.",
      icon: <HardHat className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Security & Control
          </h2>
          <p className="text-xl text-gray-300">
            Built with security-first principles and full user control
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-mango-500 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-mango flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                
                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-gray-800 rounded-2xl px-8 py-4 border border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-gray-300">Audited</span>
            </div>
            <div className="w-px h-6 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span className="text-gray-300">Open Source</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}