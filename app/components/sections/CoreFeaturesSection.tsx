'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Zap, BarChart3, Eye, CheckCircle2 } from 'lucide-react';

export default function CoreFeaturesSection() {
  const features = [
    {
      title: "Multisig Security",
      description: "Every move requires the configured number of approvals. No unilateral actions.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Shared Governance", 
      description: "Members vote on strategies, allocations, and withdrawals.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Automated Strategies",
      description: "Auto‑rebalance, auto‑compound, and built‑in risk controls.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Real‑Time Dashboard",
      description: "Live performance, positions, fees, and on‑chain tx history.",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Absolute Transparency",
      description: "Every action is recorded on‑chain; members see everything.",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "Notifications",
      description: "Alerts for proposals, approvals, and threshold reached.",
      icon: <CheckCircle2 className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Core Features
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need for secure group investing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-card rounded-2xl p-6 border border-gray-200 hover:border-mango-300 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-mango flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}