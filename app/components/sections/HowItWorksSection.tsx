'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, TrendingUp, Users, BarChart3 } from 'lucide-react';
import { useRef } from 'react';

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const steps = [
    {
      step: "01",
      title: "Creá un Vault",
      description: "Configurá un vault grupal. Añadí miembros y establecé reglas multifirma (ej. 2 de 3, 3 de 5).",
      icon: <Shield className="w-8 h-8" />,
      color: "from-orange-500 to-amber-400",
      position: 'left'
    },
    {
      step: "02", 
      title: "Financiá el Vault",
      description: "Depositá stablecoins o tokens compatibles en la red elegida.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-400",
      position: 'right'
    },
    {
      step: "03",
      title: "Votá y Aprobá", 
      description: "Proponé una acción (depósito/retiro/cambio de estrategia). Los miembros votan; una vez alcanzado el umbral, se ejecuta on-chain.",
      icon: <Users className="w-8 h-8" />,
      color: "from-orange-500 to-amber-400",
      position: 'left'
    },
    {
      step: "04",
      title: "Ganá y Monitoreá",
      description: "Asigná fondos a estrategias DeFi automatizadas. Rastreá PnL, APY y señales de riesgo en tiempo real; retirá en cualquier momento según la política del vault.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-green-500 to-emerald-400",
      position: 'right'
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-orange-500 mb-6">
            ¿Cómo Funciona?
          </h2>
          <p className="text-xl text-[#454545] max-w-2xl mx-auto">
            Cuatro pasos simples para invertir en grupo de forma segura.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
            <motion.div
              className="w-full bg-gradient-to-b from-orange-300 via-mango-400 to-green-400 rounded-full"
              style={{
                height: useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%'])
              }}
            />
            <div className="absolute inset-0 w-full bg-gray-200 rounded-full -z-10" />
          </div>

          {/* Timeline Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => {
              const delay = index * 0.2;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: step.position === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay }}
                  viewport={{ once: true, margin: '-100px' }}
                  className={`relative flex items-center ${
                    step.position === 'left' ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: delay + 0.3 }}
                    viewport={{ once: true }}
                    className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${step.color} border-4 border-white shadow-lg z-10`}
                  />

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`w-5/12 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100 relative overflow-hidden ${
                      step.position === 'left' ? 'mr-8' : 'ml-8'
                    }`}
                  >
                    {/* Gradient accent */}
                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${step.color}`} />
                    
                    {/* Step number badge */}
                    <div className={`absolute -top-4 ${
                      step.position === 'left' ? 'right-8' : 'left-8'
                    } w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {step.step}
                    </div>

                    <div className="pt-6 space-y-4">
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                        {step.icon}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-[#454545] mb-3">
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-[#454545] leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline (stacked) */}
        <div className="block lg:hidden mt-16">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${step.color}`} />
                
                <div className="flex items-start space-x-4 pt-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                    {step.step}
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white`}>
                      {step.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}