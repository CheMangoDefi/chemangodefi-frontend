"use client";

import { motion } from "framer-motion";
import { Shield, TrendingUp, Users, BarChart3 } from "lucide-react";
import { useEffect, useState } from "react";

export default function HowItWorksSection() {
	const [activeStep, setActiveStep] = useState(0);

	const steps = [
		{
			step: "01",
			title: "Creá un Vault",
			description:
				"Configurá un vault grupal. Añadí miembros y establecé reglas multifirma (ej. 2 de 3, 3 de 5).",
			icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />,
			color: "from-[#FFA94D] to-[#FFD43B]", // Using brand colors from style guide
		},
		{
			step: "02",
			title: "Financiá el Vault",
			description:
				"Depositá stablecoins o tokens compatibles en la red elegida.",
			icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />,
			color: "from-[#6ABF4B] to-[#4D9F3A]", // Using brand colors from style guide
		},
		{
			step: "03",
			title: "Votá y Aprobá",
			description:
				"Proponé una acción (depósito/retiro/cambio de estrategia). Los miembros votan; una vez alcanzado el umbral, se ejecuta on-chain.",
			icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
			color: "from-[#FFA94D] to-[#FFD43B]", // Alternating brand colors
		},
		{
			step: "04",
			title: "Ganá y Monitoreá",
			description:
				"Asigná fondos a estrategias DeFi automatizadas. Rastreá PnL, APY y señales de riesgo en tiempo real; retirá en cualquier momento según la política del vault.",
			icon: <BarChart3 className="w-6 h-6 md:w-8 md:h-8" />,
			color: "from-[#6ABF4B] to-[#4D9F3A]", // Alternating brand colors
		},
	];

	// Sequential highlighting animation
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveStep((prev) => (prev + 1) % steps.length);
		}, 6000); // Change every 8 seconds

		return () => clearInterval(interval);
	}, [steps.length]);

	return (
		<section
			className="py-16 md:py-32 bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50"
			aria-labelledby="how-it-works-heading"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-12 md:mb-20"
				>
					<h2
						id="how-it-works-heading"
						className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#454545] mb-4 md:mb-6"
					>
						¿Cómo{" "}
						<span className="bg-gradient-to-r from-orange-500 via-amber-500 to-green-500 bg-clip-text text-transparent">
							funciona
						</span>
						?
					</h2>
					<p className="text-lg md:text-xl text-[#333333] max-w-2xl mx-auto leading-relaxed">
						Cuatro pasos simples para invertir en grupo de forma segura.
					</p>
				</motion.div>

				{/* Horizontal Cards Layout - Desktop & Tablet */}
				<div className="hidden md:block">
					<div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
						{steps.map((step, index) => {
							const isActive = activeStep === index;

							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									viewport={{ once: true }}
									className="relative group cursor-pointer"
									onMouseEnter={() => setActiveStep(index)}
									role="article"
									aria-labelledby={`step-title-${index}`}
									tabIndex={0}
									onFocus={() => setActiveStep(index)}
								>
									{/* Card */}
									<motion.div
										animate={{
											scale: isActive ? 1.05 : 1,
											y: isActive ? -8 : 0,
										}}
										transition={{ duration: 0.3, ease: "easeOut" }}
										className={`
                      relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 
                      shadow-lg border-2 transition-all duration-300 h-full
                      ${
												isActive
													? "border-[#FFA94D] shadow-2xl shadow-[#FFA94D]/20"
													: "border-[#F5F5F5] hover:border-[#FFA94D]/50"
											}
                    `}
									>
										{/* Step Number Badge - Prominent on top */}
										<motion.div
											animate={{
												scale: isActive ? 1.1 : 1,
												boxShadow: isActive
													? "0 10px 25px rgba(255, 169, 77, 0.3)"
													: "0 4px 15px rgba(0, 0, 0, 0.1)",
											}}
											transition={{ duration: 0.3 }}
											className={`
                        absolute -top-6 left-1/2 transform -translate-x-1/2 
                        w-12 h-12 lg:w-16 lg:h-16 rounded-full 
                        bg-gradient-to-r ${step.color} 
                        flex items-center justify-center text-white font-bold 
                        text-lg lg:text-xl border-4 border-white z-10
                      `}
										>
											{step.step}
										</motion.div>

										<div className="pt-8 lg:pt-12 space-y-4 lg:space-y-6">
											{/* Icon */}
											<motion.div
												animate={{
													scale: isActive ? 1.1 : 1,
													rotate: isActive ? 5 : 0,
												}}
												transition={{ duration: 0.3 }}
												className={`
                          w-12 h-12 lg:w-16 lg:h-16 rounded-xl 
                          bg-gradient-to-r ${step.color} 
                          flex items-center justify-center text-white 
                          shadow-lg mx-auto
                        `}
											>
												{step.icon}
											</motion.div>

											{/* Title */}
											<h3
												id={`step-title-${index}`}
												className={`
                          text-xl lg:text-2xl font-bold text-center mb-3 
                          transition-colors duration-300
                          ${isActive ? "text-[#FFA94D]" : "text-[#333333]"}
                        `}
											>
												{step.title}
											</h3>

											{/* Description */}
											<p className="text-[#333333] leading-relaxed text-center text-sm lg:text-base">
												{step.description}
											</p>
										</div>

										{/* Active indicator glow */}
										{isActive && (
											<motion.div
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FFA94D]/10 to-[#6ABF4B]/10 pointer-events-none"
											/>
										)}
									</motion.div>
								</motion.div>
							);
						})}
					</div>

					{/* Connection Line - Desktop only */}
					<div className="hidden lg:block mt-8">
						<div className="relative">
							<div className="absolute top-1/2 left-0 right-0 h-1 bg-[#F5F5F5] rounded-full transform -translate-y-1/2" />
							<motion.div
								animate={{
									width: `${((activeStep + 1) / steps.length) * 100}%`,
								}}
								transition={{ duration: 0.5, ease: "easeInOut" }}
								className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-[#FFA94D] to-[#6ABF4B] rounded-full transform -translate-y-1/2"
							/>
						</div>
					</div>
				</div>

				{/* Mobile Layout - Vertical Stack */}
				<div className="block md:hidden">
					<div className="space-y-6">
						{steps.map((step, index) => {
							const isActive = activeStep === index;

							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: -30 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									viewport={{ once: true }}
									className={`
                    relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 
                    shadow-lg border-2 transition-all duration-300
                    ${
											isActive
												? "border-[#FFA94D] shadow-xl shadow-[#FFA94D]/20 scale-[1.02]"
												: "border-[#F5F5F5]"
										}
                  `}
									role="article"
									aria-labelledby={`mobile-step-title-${index}`}
								>
									{/* Top gradient accent */}
									<div
										className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${step.color} rounded-t-2xl`}
									/>

									<div className="flex items-start space-x-4 pt-4">
										{/* Step number */}
										<motion.div
											animate={{
												scale: isActive ? 1.1 : 1,
												boxShadow: isActive
													? "0 8px 20px rgba(255, 169, 77, 0.3)"
													: "0 4px 10px rgba(0, 0, 0, 0.1)",
											}}
											className={`
                        w-12 h-12 rounded-full bg-gradient-to-r ${step.color} 
                        flex items-center justify-center text-white font-bold 
                        text-lg flex-shrink-0
                      `}
										>
											{step.step}
										</motion.div>

										<div className="flex-1 space-y-3">
											{/* Icon */}
											<motion.div
												animate={{
													scale: isActive ? 1.1 : 1,
												}}
												className={`
                          w-10 h-10 rounded-lg bg-gradient-to-r ${step.color} 
                          flex items-center justify-center text-white
                        `}
											>
												{step.icon}
											</motion.div>

											{/* Title */}
											<h3
												id={`mobile-step-title-${index}`}
												className={`
                          text-lg font-bold transition-colors duration-300
                          ${isActive ? "text-[#FFA94D]" : "text-[#333333]"}
                        `}
											>
												{step.title}
											</h3>

											{/* Description */}
											<p className="text-[#333333] leading-relaxed text-sm">
												{step.description}
											</p>
										</div>
									</div>

									{/* Active indicator */}
									{isActive && (
										<motion.div
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FFA94D]/5 to-[#6ABF4B]/5 pointer-events-none"
										/>
									)}
								</motion.div>
							);
						})}
					</div>
				</div>

				{/* Progress Indicators */}
				<div className="flex justify-center mt-8 md:mt-12 space-x-2">
					{steps.map((_, index) => (
						<button
							key={index}
							onClick={() => setActiveStep(index)}
							className={`
                w-3 h-3 rounded-full transition-all duration-300 
                focus:outline-none focus:ring-2 focus:ring-[#FFA94D] focus:ring-offset-2
                ${
									activeStep === index
										? "bg-[#FFA94D] scale-125"
										: "bg-[#F5F5F5] hover:bg-[#FFA94D]/50"
								}
              `}
							aria-label={`Ir al paso ${index + 1}: ${steps[index].title}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
