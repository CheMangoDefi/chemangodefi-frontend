'use client';

import { motion } from 'framer-motion';
import { Home, TrendingUp, Building, Users, Plane } from 'lucide-react';

export default function UseCasesSection() {
  const useCases = [
    {
      title: "Friends & Family Funds",
      description: "Save and grow together with guardrails.",
      icon: <Home className="w-8 h-8" />,
      color: "from-mango-400 to-orange-400"
    },
    {
      title: "Investment Clubs", 
      description: "Vote on theses, allocate, and track results transparently.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-orange-400 to-mango-500"
    },
    {
      title: "Startup / DAO Treasuries",
      description: "Multisig approvals for runway and yield strategies.",
      icon: <Building className="w-8 h-8" />,
      color: "from-mango-500 to-teal-400"
    },
    {
      title: "Communities & Associations",
      description: "Dues in, audited spending out—no spreadsheets.",
      icon: <Users className="w-8 h-8" />,
      color: "from-teal-400 to-mango-600"
    },
    {
      title: "Travel / Event Pools",
      description: "Collect, approve, and settle shared expenses on‑chain.",
      icon: <Plane className="w-8 h-8" />,
      color: "from-mango-600 to-orange-500"
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
            Use Cases
          </h2>
          <p className="text-xl text-gray-600">
            Perfect for any group financial activity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-card rounded-2xl p-8 border border-gray-200 hover:border-mango-300 transition-all duration-300 relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${useCase.color}`}></div>
              
              <div className="space-y-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${useCase.color} flex items-center justify-center text-white mb-4`}>
                  {useCase.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900">
                  {useCase.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}