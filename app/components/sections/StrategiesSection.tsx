"use client";

import { motion } from "framer-motion";
import { Shield, Target, Activity, Settings } from "lucide-react";

export default function StrategiesSection() {
	const strategies = [
		{
			title: "Conservador",
			description: "Lending de stablecoins y retornos de baja volatilidad.",
			apy: "4-6% APY",
			risk: "Bajo",
			liquidity: "Alta",
			icon: <Shield className="w-6 h-6" />,
			riskColor: "bg-green-100 text-green-800",
			liquidityColor: "bg-blue-100 text-blue-800",
		},
		{
			title: "Balanceado",
			description: "Mezcla de lending, posiciones LP, y staking conservador.",
			apy: "7-12% APY",
			risk: "Medio",
			liquidity: "Media",
			icon: <Target className="w-6 h-6" />,
			riskColor: "bg-yellow-100 text-yellow-800",
			liquidityColor: "bg-orange-100 text-orange-800",
		},
		{
			title: "Dinámico",
			description: "Oportunidad de mayores retornos con controles de riesgo ajustables.",
			apy: "10-18% APY",
			risk: "Alto",
			liquidity: "Variable",
			icon: <Activity className="w-6 h-6" />,
			riskColor: "bg-red-100 text-red-800",
			liquidityColor: "bg-purple-100 text-purple-800",
		},
		{
			title: "Personalizado",
			description: "Creá tu propia estrategia y reglas de gobernanza.",
			apy: "Variable",
			risk: "???",
			liquidity: "???",
			icon: <Settings className="w-6 h-6" />,
			riskColor: "bg-gray-100 text-gray-800",
			liquidityColor: "bg-gray-100 text-gray-800",
		},
	];

	return (
		<section className="py-24 bg-gradient-to-br from-orange-50 via-amber-25 to-green-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl sm:text-5xl font-bold text-[#454545] mb-4">
						Estrategias{" "}
						<span className="bg-gradient-to-r from-orange-500 via-amber-500 to-green-500 bg-clip-text text-transparent">
							personalizadas
						</span>
					</h2>
					<p className="text-xl text-[#454545]">
						Elige el nivel de riesgo según las metas de tu grupo.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
					{strategies.map((strategy, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							whileHover={{ y: -5, scale: 1.02 }}
							className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
						>
							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<div className="w-12 h-12 rounded-full bg-gradient-mango flex items-center justify-center text-white">
										{strategy.icon}
									</div>
									<div className="text-left">
										<div className="text-2xl font-bold text-[#454545]">
											{strategy.apy}
										</div>
									</div>
								</div>

								<h3 className="text-xl font-bold text-[#454545]">
									{strategy.title}
								</h3>

								<p className="text-[#454545] leading-relaxed min-h-[48px]">
									{strategy.description}
								</p>

								<div className="flex gap-2">
									<span
										className={`px-3 py-1 rounded-full text-xs font-semibold ${strategy.riskColor}`}
									>
										Riesgo: {strategy.risk}
									</span>
									<span
										className={`px-3 py-1 rounded-full text-xs font-semibold ${strategy.liquidityColor}`}
									>
										Liquidez: {strategy.liquidity}
									</span>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center"
				>
					<p className="text-lg text-[#6b6b6b] font-medium">
						Siempre mantenés control total de tus estrategias. El grupo decide,
						CheMango ejecuta.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
