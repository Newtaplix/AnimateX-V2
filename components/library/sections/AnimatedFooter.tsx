import React from "react";

export function AnimatedFooter() {
	return (
		<footer className="border-t border-zinc-800/80 bg-black">
			<div className="mx-auto max-w-6xl px-6 py-10">
				<div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
					<div className="flex items-center gap-3">
						<div className="h-6 w-6 animate-[spin_10s_linear_infinite] rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500" />
						<span className="text-sm font-medium text-zinc-300">AnimateX Library</span>
					</div>
					<nav className="flex items-center gap-4 text-sm text-zinc-400">
						<a className="transition hover:text-white" href="#">Docs</a>
						<a className="transition hover:text-white" href="#">Components</a>
						<a className="transition hover:text-white" href="#">Templates</a>
					</nav>
				</div>
				<p className="mt-6 text-center text-xs text-zinc-500">© {new Date().getFullYear()} AnimateX. All rights reserved.</p>
			</div>
		</footer>
	);
}

export default AnimatedFooter;


