"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function UseCasesSection() {
	const useCases = [
		{
			image: "/usecase-3.png",
			title: "Fondos familiares",
			description:
				"Ahorrá y crecé junto a tu familia con reglas claras y transparencia total.",
			gradient: "from-orange-500 to-amber-400",
		},
		{
			image: "/usecase-1.png",
			title: "Startups y equipos",
			description:
				"Tesorerías multisig para equipos que necesitan aprobar gastos y estrategias de rendimiento.",
			gradient: "from-green-500 to-emerald-400",
		},
		{
			image: "/usecase-2.png",
			title: "Viajes entre amigos",
			description:
				"Juntá plata, aprobá gastos y liquidá cuentas compartidas on-chain sin complicaciones.",
			gradient: "from-orange-500 to-amber-400",
		},
	];

	const cardVariants: Variants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<section id="caracteristicas" className="py-24 relative overflow-hidden">
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
					<h2
						className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
						style={{ color: "#454545" }}
					>
						Para quién es{" "}
						<span className="bg-gradient-to-r from-orange-500 via-amber-500 to-green-500 bg-clip-text text-transparent">
							CheMango
						</span>
						?
					</h2>
					<p
						className="text-xl max-w-3xl mx-auto leading-relaxed text-pretty"
						style={{ color: "#454545" }}
					>
            CheMango se adapta a cualquier
						grupo que quiera manejar su plata de forma inteligente y transparente.
					</p>
				</motion.div>

				{/* 3-Column Use Cases Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
					{useCases.map((useCase, index) => (
						<motion.div
							key={index}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
							variants={cardVariants}
							transition={{
								duration: 0.8,
								delay: index * 0.2,
								ease: "easeOut",
							}}
							whileHover={{ scale: 1.02, y: -5 }}
							className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
						>
							{/* Card gradient background on hover */}
							<div
								className={`absolute inset-0 bg-gradient-to-r ${useCase.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}
							/>

							{/* Image Section */}
							<motion.div
								className="relative mb-6"
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.3 }}
							>
								<div className="relative">
									{/* Floating background gradient blur */}
									<motion.div
										className={`absolute inset-0 bg-gradient-to-r ${useCase.gradient} rounded-2xl blur-2xl opacity-20 scale-110`}
									/>

									{/* Use Case Image */}
									<motion.div
										className="relative z-10"
									>
										<Image
											src={useCase.image}
											alt={`Ilustración de ${useCase.title} - CheMango DeFi`}
											width={300}
											height={300}
											className="w-full max-w-xs mx-auto h-auto object-contain drop-shadow-xl"
											priority={index < 3}
										/>
									</motion.div>

									{/* Decorative elements */}
									<div
										className={`absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-r ${useCase.gradient} rounded-full opacity-10 blur-lg`}
									/>
									<div
										className={`absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-r ${useCase.gradient} rounded-full opacity-5 blur-xl`}
									/>
								</div>
							</motion.div>

							{/* Content Section */}
							<div className="space-y-4 relative z-10">
								{/* Title with gradient accent */}
								<h3 className="text-xl lg:text-2xl font-bold leading-tight">
									<span className="text-[#454545]">
										{useCase.title.split(" ").slice(0, -1).join(" ")}
									</span>{" "}
									<span
										className={`bg-gradient-to-r ${useCase.gradient} bg-clip-text text-transparent`}
									>
										{useCase.title.split(" ").slice(-1)}
									</span>
								</h3>

								{/* Description */}
								<p className="text-base lg:text-lg leading-relaxed text-[#454545] opacity-80">
									{useCase.description}
								</p>

								{/* Decorative gradient line */}
								<div
									className={`w-16 h-0.5 bg-gradient-to-r ${useCase.gradient} rounded-full`}
								/>
							</div>

							{/* Hover effect accent */}
							<div
								className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${useCase.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
							/>
						</motion.div>
					))}
				</div>

				{/* Bottom CTA */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					viewport={{ once: true }}
					className="text-center mt-16"
				>
					<div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-100 to-green-100 border border-orange-200 cursor-pointer hover:shadow-lg transition-all duration-300">
						<span className="text-sm font-medium text-orange-600">
							Explora otros usos
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

			{/* Decorative background elements */}
			<div className="absolute top-1/3 left-1/4 w-24 h-24 bg-gradient-to-r from-orange-400/15 to-transparent rounded-full blur-2xl"></div>
			<div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-green-400/15 to-transparent rounded-full blur-3xl"></div>
			<div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-amber-400/20 to-transparent rounded-full blur-xl"></div>
		</section>
	);
}
