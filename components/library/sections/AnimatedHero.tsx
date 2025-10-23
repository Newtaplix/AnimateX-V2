"use client";

import React from "react";

type AnimatedHeroProps = {
	title?: string;
	subtitle?: string;
	ctaPrimaryText?: string;
	ctaSecondaryText?: string;
	onPrimaryClick?: () => void;
	onSecondaryClick?: () => void;
};

export function AnimatedHero({
	title = "Build delightful animations",
	subtitle = "Production ready sections you can drop into any Next.js app.",
	ctaPrimaryText = "Get Started",
	ctaSecondaryText = "Learn More",
	onPrimaryClick,
	onSecondaryClick
}: AnimatedHeroProps) {
	return (
		<section className="relative overflow-hidden bg-gradient-to-b from-zinc-900 via-zinc-900 to-black">
			<div className="pointer-events-none absolute -inset-24 opacity-40 [background:radial-gradient(600px_200px_at_50%_-80px,rgba(99,102,241,0.35),transparent_70%)]" />
			<div className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
				<h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
					<span className="inline-block animate-[float_6s_ease-in-out_infinite] will-change-transform">Animate</span>
					<span className="mx-2 inline-block text-indigo-400">anything</span>
					<span className="inline-block animate-[float_6s_ease-in-out_infinite] [animation-delay:200ms] will-change-transform">beautifully</span>
				</h1>
				<p className="mx-auto mt-5 max-w-2xl text-balance text-zinc-300">
					{subtitle}
				</p>
				<div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
					<button
						className="group inline-flex items-center justify-center rounded-lg bg-indigo-500 px-5 py-3 font-medium text-white transition-transform hover:scale-[1.02] hover:bg-indigo-400 active:scale-[0.98]"
						onClick={onPrimaryClick}
					>
						{ctaPrimaryText}
						<span className="ml-2 inline-block translate-x-0 transition-transform group-hover:translate-x-0.5">→</span>
					</button>
					<button
						className="inline-flex items-center justify-center rounded-lg border border-zinc-700/80 bg-zinc-900/50 px-5 py-3 font-medium text-zinc-200 backdrop-blur transition hover:border-zinc-600 hover:text-white"
						onClick={onSecondaryClick}
					>
						{ctaSecondaryText}
					</button>
				</div>
				<div className="pointer-events-none relative mt-14 grid grid-cols-3 gap-3 opacity-80 sm:grid-cols-6">
					{Array.from({ length: 18 }).map((_, i) => (
						<div
							key={i}
							className="aspect-[4/3] w-full animate-[pulse_4s_ease-in-out_infinite] rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900/60 ring-1 ring-inset ring-white/5 [animation-delay:var(--d)]"
							style={{
								// staggered delay via CSS variable
								// @ts-expect-error custom property
								"--d": `${(i % 6) * 120}ms`
							}}
						/>
					))}
				</div>
			</div>
			<style jsx>{`
				@keyframes float {
					0%, 100% { transform: translateY(0px); }
					50% { transform: translateY(-6px); }
				}
			`}</style>
		</section>
	);
}

export default AnimatedHero;


