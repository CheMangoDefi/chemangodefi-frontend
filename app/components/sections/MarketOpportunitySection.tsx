'use client';

import { motion } from 'framer-motion';
import { Users, TrendingUp, PiggyBank } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function MarketOpportunitySection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Selected the 3 most impactful statistics for market opportunity
  const keyStats = [
    {
      title: "Población Sin Banco",
      value: "122M",
      description: "personas sin acceso bancario tradicional en Latinoamérica",
      icon: <Users className="w-8 h-8" />,
      targetValue: 122,
      suffix: "M",
    },
    {
      title: "Crecimiento Fintech",
      value: "340%",
      description: "aumento en startups fintech en los últimos 6 años",
      icon: <TrendingUp className="w-8 h-8" />,
      targetValue: 340,
      suffix: "%",
    },
    {
      title: "Ahorro Grupal",
      value: "70%",
      description: "de latinoamericanos participan en sistemas de ahorro informal",
      icon: <PiggyBank className="w-8 h-8" />,
      targetValue: 70,
      suffix: "%",
    }
  ];

  const CounterAnimation = ({ 
    targetValue, 
    suffix = "", 
    duration = 2000 
  }: { 
    targetValue: number; 
    suffix?: string; 
    duration?: number;
  }) => {
    const [currentValue, setCurrentValue] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
      if (!isVisible || hasAnimated) return;

      const startTime = Date.now();
      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const value = targetValue * easeOutQuart;
        
        setCurrentValue(value);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setHasAnimated(true);
        }
      };
      
      requestAnimationFrame(animate);
    }, [isVisible, targetValue, duration, hasAnimated]);

    const formatValue = (value: number) => {
      if (suffix === "M") {
        return Math.round(value).toString();
      } else {
        return Math.round(value).toString();
      }
    };

    return (
      <span className="font-bold">
        {formatValue(currentValue)}{suffix}
      </span>
    );
  };

  return (
    <section className="py-24 bg-[#1f1f1f] srelative overflow-hidden">
      {/* Subtle background elements following style guide */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#FFA94D] to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#6ABF4B] to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header - simplified and focused */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl  font-bold text-[#ebebeb] mb-6">
            El momento{' '}
            <span className="bg-gradient-to-r from-[#FFA94D] to-[#6ABF4B] bg-clip-text text-transparent">
              Perfecto
            </span>
          </h2>
          
          <p className="text-xl text-[#bdbdbd] max-w-3xl mx-auto leading-relaxed">
            Estadísticas clave que demuestran el potencial masivo que existe.
          </p>
        </motion.div>

        {/* Simple 3-column grid focused entirely on stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {keyStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              tabIndex={0}
              role="article"
              aria-label={`${stat.title}: ${stat.value} - ${stat.description}`}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl focus:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#FFA94D]/30 focus:border-[#FFA94D] focus:outline-none text-center group cursor-pointer"
            >
              {/* Icon with CheMango gradient */}
              <div className="w-20 h-20 bg-gradient-to-br from-[#FFA94D] to-[#6ABF4B] rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>

              {/* Main statistic - large and prominent */}
              <div className="mb-6">
                <div className="text-6xl lg:text-7xl font-bold text-[#454545] mb-2">
                  <CounterAnimation 
                    targetValue={stat.targetValue}
                    suffix={stat.suffix}
                    duration={2000 + index * 300}
                  />
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-[#919191] mb-4">
                  {stat.title}
                </h3>
              </div>

              {/* Description - clean and readable */}
              <p className="text-[#919191] leading-relaxed text-lg">
                {stat.description}
              </p>

              {/* Subtle accent line following style guide */}
              <div className="mt-8 w-16 h-1 bg-gradient-to-r from-[#FFA94D] to-[#6ABF4B] rounded-full mx-auto"></div>
            </motion.div>
          ))}
        </div>

        {/* Simple conclusion message
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-2xl font-semibold text-gray-800 max-w-4xl mx-auto leading-relaxed">
            <span className="text-[#FFA94D]">122 millones</span> de personas desatendidas, 
            un <span className="text-[#6ABF4B]">crecimiento del 340%</span> en fintech, y 
            <span className="text-[#FFA94D]"> 70% de adopción</span> en ahorro grupal:
          </p>
          <p className="text-3xl font-bold text-gray-900 mt-4">
            El momento perfecto para CheMango DeFi
          </p>
        </motion.div> */}
      </div>
    </section>
  );
}