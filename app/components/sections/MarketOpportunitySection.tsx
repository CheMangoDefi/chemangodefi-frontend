'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Smartphone, PiggyBank, Globe, Banknote, BarChart3 } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function MarketOpportunitySection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const marketData = [
    {
      title: "Población Sin Banco",
      value: "122M",
      description: "personas sin acceso bancario tradicional en Latinoamérica",
      icon: <Users className="w-6 h-6" />,
      targetValue: 122,
      suffix: "M",
      category: "Mercado Objetivo",
      trend: "+12% anual",
      impact: "Crítico"
    },
    {
      title: "Mercado Digital",
      value: "$1.9B",
      description: "tamaño proyectado del mercado de banca digital para 2033",
      icon: <Banknote className="w-6 h-6" />,
      targetValue: 1.9,
      suffix: "B",
      prefix: "$",
      category: "Tamaño de Mercado",
      trend: "+18% CAGR",
      impact: "Alto"
    },
    {
      title: "Crecimiento Fintech",
      value: "340%",
      description: "aumento en startups fintech en los últimos 6 años",
      icon: <TrendingUp className="w-6 h-6" />,
      targetValue: 340,
      suffix: "%",
      category: "Innovación",
      trend: "Acelerado",
      impact: "Alto"
    },
    {
      title: "Adopción Móvil",
      value: "74%",
      description: "de brasileños usan banca móvil activamente",
      icon: <Smartphone className="w-6 h-6" />,
      targetValue: 74,
      suffix: "%",
      category: "Adopción Digital",
      trend: "+8% anual",
      impact: "Medio"
    },
    {
      title: "Ahorro Grupal",
      value: "70%",
      description: "de latinoamericanos participan en sistemas de ahorro informal",
      icon: <PiggyBank className="w-6 h-6" />,
      targetValue: 70,
      suffix: "%",
      category: "Comportamiento",
      trend: "Estable",
      impact: "Medio"
    },
    {
      title: "Penetración DeFi",
      value: "25%",
      description: "crecimiento anual en adopción de servicios financieros descentralizados",
      icon: <Globe className="w-6 h-6" />,
      targetValue: 25,
      suffix: "%",
      category: "Emergente",
      trend: "+25% anual",
      impact: "Emergente"
    }
  ];

  const CounterAnimation = ({ 
    targetValue, 
    prefix = "", 
    suffix = "", 
    duration = 2000 
  }: { 
    targetValue: number; 
    prefix?: string; 
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
      } else if (suffix === "B") {
        return value.toFixed(1);
      } else {
        return Math.round(value).toString();
      }
    };

    return (
      <span className="font-bold text-gray-900">
        {prefix}{formatValue(currentValue)}{suffix}
      </span>
    );
  };

  const StatCard = ({ 
    data, 
    index 
  }: { 
    data: typeof marketData[0], 
    index: number 
  }) => {
    // Determine impact color based on impact level
    const getImpactColor = (impact: string) => {
      switch (impact) {
        case 'Crítico':
          return 'bg-red-50 text-red-700 border-red-200';
        case 'Alto':
          return 'bg-orange-50 text-orange-700 border-orange-200';
        case 'Medio':
          return 'bg-yellow-50 text-yellow-700 border-yellow-200';
        case 'Emergente':
          return 'bg-green-50 text-green-700 border-green-200';
        default:
          return 'bg-gray-50 text-gray-700 border-gray-200';
      }
    };

    // Subtle animation that respects reduced motion
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const cardAnimation = prefersReducedMotion ? {} : {
      y: [0, -2, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.5
      }
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        // animate={cardAnimation}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.1,
          ease: "easeOut"
        }}
        viewport={{ once: true }}
        whileHover={{ 
          y: -4,
          transition: { duration: 0.2 }
        }}
        tabIndex={0}
        role="article"
        aria-label={`${data.title}: ${data.value} - ${data.description}`}
        className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl focus:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#FFA94D]/30 focus:border-[#FFA94D] focus:outline-none group"
      >
        {/* Header with icon and category */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FFA94D] to-[#6ABF4B] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
              {data.icon}
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                {data.category}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mt-1">
                {data.title}
              </h3>
            </div>
          </div>
          
          {/* Impact badge */}
          <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getImpactColor(data.impact)}`}>
            {data.impact}
          </div>
        </div>

        {/* Main statistic */}
        <div className="mb-4">
          <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            <CounterAnimation 
              targetValue={data.targetValue}
              prefix={data.prefix}
              suffix={data.suffix}
              duration={2000 + index * 200}
            />
          </div>
          
          {/* Trend indicator */}
          <div className="flex items-center gap-2 text-sm">
            <BarChart3 className="w-4 h-4 text-[#6ABF4B]" />
            <span className="text-[#6ABF4B] font-medium">{data.trend}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
          {data.description}
        </p>

        {/* Progress bar for visual impact */}
        <div className="mt-6">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Relevancia para CheMango</span>
            <span>{data.impact}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ 
                width: data.impact === 'Crítico' ? '100%' : 
                       data.impact === 'Alto' ? '80%' : 
                       data.impact === 'Medio' ? '60%' : '40%'
              }}
              transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#FFA94D] to-[#6ABF4B] h-2 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#FFA94D] to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#6ABF4B] to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFA94D] to-[#6ABF4B] text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg"
          >
            <BarChart3 className="w-4 h-4" />
            Análisis de Oportunidad de Mercado
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-[#FFA94D] to-[#6ABF4B] bg-clip-text text-transparent">
              Datos que Respaldan
            </span>
            <br />
            nuestro Potencial
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            El mercado latinoamericano presenta condiciones ideales para la adopción de soluciones financieras 
            innovadoras como CheMango DeFi.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {marketData.map((data, index) => (
            <StatCard key={index} data={data} index={index} />
          ))}
        </div>

        {/* Key Insights Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Conclusiones Clave del Análisis
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Los datos revelan una oportunidad histórica para CheMango en el mercado latinoamericano
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Mercado Desatendido</h4>
              <p className="text-gray-600">122M personas sin acceso bancario representan una oportunidad masiva sin explotar</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Crecimiento Acelerado</h4>
              <p className="text-gray-600">340% de crecimiento en fintech demuestra la alta demanda de innovación financiera</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <PiggyBank className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Comportamiento Ideal</h4>
              <p className="text-gray-600">70% ya practica ahorro grupal, facilitando la adopción de nuestra solución</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-200 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              El Momento es Ahora
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Con 122M personas desatendidas y un mercado en crecimiento explosivo, 
              CheMango está posicionado para liderar la revolución del ahorro grupal digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFA94D] to-[#6ABF4B] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Únete a CheMango
                <TrendingUp className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-[#FFA94D] transition-all duration-300"
              >
                Ver Presentación Completa
                <BarChart3 className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}