"use client";

import React from "react";

type Tier = {
	name: string;
	price: string;
	description: string;
	features: string[];
	isPopular?: boolean;
};

type AnimatedPricingProps = {
	title?: string;
	subtitle?: string;
	tiers?: Tier[];
	onSelect?: (tierName: string) => void;
};

const defaultTiers: Tier[] = [
	{
		name: "Starter",
		price: "$0",
		description: "All the essentials to start prototyping.",
		features: ["1 project", "Community support", "Basic components"]
	},
	{
		name: "Pro",
		price: "$19",
		description: "Advanced animations and premium sections.",
		features: ["Unlimited projects", "Premium library", "Email support"],
		isPopular: true
	},
	{
		name: "Team",
		price: "$49",
		description: "Collaboration tools for teams and agencies.",
		features: ["Seat management", "Team templates", "Priority support"]
	}
];

export function AnimatedPricing({
	title = "Simple pricing",
	subtitle = "Pick a plan that grows with you.",
	tiers = defaultTiers,
	onSelect
}: AnimatedPricingProps) {
	return (
		<section className="relative bg-black py-20">
			<div className="mx-auto max-w-6xl px-6">
				<div className="text-center">
					<h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
					<p className="mt-3 text-zinc-300">{subtitle}</p>
				</div>
				<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{tiers.map((tier, idx) => (
						<div
							key={tier.name}
							className="group relative rounded-2xl border border-zinc-800/80 bg-zinc-950/40 p-6 ring-1 ring-white/5 backdrop-blur transition-transform hover:scale-[1.01]"
							style={{ animationDelay: `${idx * 80}ms` }}
						>
							<div className="absolute inset-0 -z-10 rounded-2xl opacity-0 blur-2xl transition-opacity group-hover:opacity-20" style={{ background: tier.isPopular ? "radial-gradient(600px 200px at 50% -20%, rgba(99,102,241,0.35), transparent 60%)" : undefined }} />
							<div className="flex items-baseline justify-between">
								<h3 className="text-lg font-semibold text-white">{tier.name}</h3>
								{tier.isPopular && (
									<span className="rounded-full bg-indigo-500/15 px-2 py-1 text-xs font-medium text-indigo-300 ring-1 ring-inset ring-indigo-500/30">Popular</span>
								)}
							</div>
							<div className="mt-4 flex items-baseline gap-1">
								<span className="text-3xl font-extrabold text-white">{tier.price}</span>
								<span className="text-sm text-zinc-400">/mo</span>
							</div>
							<p className="mt-2 text-sm text-zinc-300">{tier.description}</p>
							<ul className="mt-6 space-y-2 text-sm text-zinc-300">
								{tier.features.map((f) => (
									<li key={f} className="flex items-center gap-2">
										<span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400" />
										{f}
									</li>
								))}
							</ul>
							<button
								className="mt-6 w-full rounded-lg bg-indigo-500 px-4 py-2.5 font-medium text-white transition hover:bg-indigo-400"
								onClick={() => onSelect?.(tier.name)}
							>
								Choose {tier.name}
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default AnimatedPricing;


