'use client';

import { motion } from 'framer-motion';
import { Shield, TrendingUp, Users, BarChart3 } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Create a Vault",
      description: "Spin up a non‑custodial group vault. Add members and set multisig rules (e.g., 2‑of‑3, 3‑of‑5).",
      icon: <Shield className="w-8 h-8" />,
      color: "from-mango-400 to-orange-500"
    },
    {
      step: "02", 
      title: "Fund the Vault",
      description: "Deposit supported stablecoins or tokens on the chosen network.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-orange-400 to-mango-600"
    },
    {
      step: "03",
      title: "Vote & Approve", 
      description: "Propose an action (deposit/withdraw/strategy change). Members vote; once the threshold is met, it executes on‑chain.",
      icon: <Users className="w-8 h-8" />,
      color: "from-mango-500 to-teal-500"
    },
    {
      step: "04",
      title: "Earn & Monitor",
      description: "Allocate into automated DeFi strategies. Track PnL, APY, and risk signals live; withdraw anytime per vault policy.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-teal-400 to-mango-400"
    }
  ];

  return (
    <section className="py-24 bg-gradient-mango-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-700">
            Four simple steps to secure group investing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${step.color}`}></div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white`}>
                    {step.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-200">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}