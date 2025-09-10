'use client';

import { motion } from 'framer-motion';
import { ShieldCheckIcon, CogIcon, ArrowTrendingUpIcon, UsersIcon } from '@heroicons/react/24/outline';

export default function ValuePropositionSection() {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: "Bank-Grade Security",
      description: "Multi-signature wallets and smart contract audits protect your investments with military-grade security.",
      gradient: "from-orange-500 to-amber-400"
    },
    {
      icon: UsersIcon,
      title: "Democratic Decisions",
      description: "Clear approval workflows ensure every group member has a voice in investment decisions - no more financial drama.",
      gradient: "from-amber-400 to-green-500"
    },
    {
      icon: CogIcon,
      title: "Smart Automation",
      description: "Intelligent strategies handle the complex stuff while you focus on what matters - growing your wealth together.",
      gradient: "from-green-500 to-emerald-400"
    },
    {
      icon: ArrowTrendingUpIcon,
      title: "Optimized Returns",
      description: "Advanced DeFi strategies maximize your returns with minimal effort and maximum transparency for the whole group.",
      gradient: "from-emerald-400 to-orange-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-25 to-green-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#454545' }}>
            Why Choose{' '}
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-green-500 bg-clip-text text-transparent">
              CheMango
            </span>
            ?
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#454545' }}>
            Stop improvising with group investments. Get the security, transparency, 
            and smart strategies your money deserves.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-orange-200/50">
                {/* Icon with gradient background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#454545' }}>
                  {feature.title}
                </h3>
                <p className="leading-relaxed" style={{ color: '#454545' }}>
                  {feature.description}
                </p>

                {/* Decorative gradient border on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-100 to-green-100 border border-orange-200">
            <span className="text-sm font-medium text-gray-700">
              Ready to revolutionize group investing?
            </span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-orange-500"
            >
              →
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-orange-400/20 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-green-400/20 to-transparent rounded-full blur-3xl"></div>
    </section>
  );
}