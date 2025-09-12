'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

export default function ValuePropositionSection() {
  const features = [
    {
      image: "/character_1.png",
      title: "Seguridad de grado militar",
      description: "Wallets multisig y smart contracts auditados protegen tus inversiones con la más alta seguridad.",
      gradient: "from-orange-500 to-amber-400",
      position: "left"
    },
    {
      image: "/character_2.png",
      title: "Decisiones en conjunto",
      description: "Flujos de aprobación claros aseguran que cada miembro tenga voz en las decisiones financieras.",
      gradient: "from-green-500 to-emerald-400",
      position: "right"
    },
    {
      image: "/character_3.png",
      title: "Automatización inteligente",
      description: "Estrategias inteligentes manejan los procesos complejos para que te enfoques en lo que importa - hacer crecer tu plata juntos.",
      gradient: "from-orange-500 to-amber-400",
      position: "left"
    },
    {
      image: "/character_4.png",
      title: "Retornos optimizados",
      description: "Estrategias DeFi avanzadas maximizan tus retornos con el mínimo esfuerzo y la máxima transparencia para el grupo completo.",
      gradient: "from-green-500 to-emerald-400",
      position: "right"
    }
  ];

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="nosotros" className="py-24 relative overflow-hidden">
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
            Por qué elegir{' '}
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-green-500 bg-clip-text text-transparent">
              CheMango
            </span>
            ?
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-pretty" style={{ color: '#454545' }}>
            Juntá a tu grupo, poné una meta y a ahorrar! Obtené la seguridad, transparencia, 
            y estrategias inteligentes que tu plata merece.
          </p>
        </motion.div>

        {/* Features with Character Images */}
        <div className="space-y-24 lg:space-y-32">
          {features.map((feature, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image Column */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={imageVariants}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative ${
                  feature.position === 'right' ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="relative">
                  {/* Floating background gradient */}
                  <motion.div
                    animate={floatingAnimation}
                    className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-3xl opacity-20 scale-110`}
                  />
                  
                  {/* Character Image */}
                  <motion.div
                    animate={floatingAnimation}
                    className="relative z-10"
                  >
                    <Image
                      src={feature.image}
                      alt={`Ilustración de ${feature.title} - CheMango DeFi`}
                      width={400}
                      height={400}
                      className="w-full max-w-md mx-auto h-auto object-contain drop-shadow-2xl"
                      priority={index < 2}
                    />
                  </motion.div>
                  
                  {/* Decorative elements */}
                  <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r ${feature.gradient} rounded-full opacity-10 blur-xl`} />
                  <div className={`absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r ${feature.gradient} rounded-full opacity-5 blur-2xl`} />
                </div>
              </motion.div>

              {/* Text Column */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={textVariants}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`space-y-6 ${
                  feature.position === 'right' ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                {/* Title with gradient accent */}
                <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                  <span className="text-[#454545]">{feature.title.split(' ').slice(0, -1).join(' ')}</span>{' '}
                  <span className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                    {feature.title.split(' ').slice(-1)}
                  </span>
                </h3>
                
                {/* Description */}
                <p className="text-lg lg:text-xl leading-relaxed text-[#454545] max-w-lg">
                  {feature.description}
                </p>
                
                {/* Decorative gradient line */}
                <div className={`w-20 h-1 bg-gradient-to-r ${feature.gradient} rounded-full`} />
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 hover:cursor-pointer"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-100 to-green-100 border border-orange-200">
            <span className="text-sm font-medium text-orange-500">
              Listo para revolucionar tus inversiones grupales?
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