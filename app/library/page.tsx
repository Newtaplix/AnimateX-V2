import React from "react";
import MinimalAnimatedHome from "@/components/library/templates/MinimalAnimatedHome";

export const metadata = {
	title: "AnimateX Library",
	description: "Preview animated sections and templates"
};

export default function Page() {
	return (
		<div className="min-h-dvh bg-black">
			<MinimalAnimatedHome />
		</div>
	);
}


