import { useState } from "react";

interface AdvantageProps {
	title: string;
	description: string;
	extendedDescription?: string;
}
interface DarkModeProps {
	darkMode: boolean;
}
function Advantage({
	title,
	description,
	extendedDescription,
	darkMode,
}: AdvantageProps & DarkModeProps) {
	const [showMore, setShowMore] = useState(false);

	return (
		<section
			onKeyUp={(e) => {
				if (e.key === "Enter") setShowMore(!showMore);
			}}
			onClick={() => setShowMore(!showMore)}
			className={` p-6 rounded-lg shadow-lg bg-linear-to-br/hsl${darkMode ? " from-green-500 to-green-900" : " from-green-700 to-green-500"}`}
		>
			<h3 className="text-xl font-bold flex items-center justify-between">
				{title}
			</h3>
			<p className="mt-2 text-sm">{description}</p>

			{showMore && (
				<div className="mt-4 p-4 bg-white/10 border-2 border-green-600 rounded-lg space-y-4 text-sm">
					{extendedDescription}
				</div>
			)}
		</section>
	);
}

export default Advantage;
