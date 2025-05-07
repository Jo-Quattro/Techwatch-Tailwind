interface DarkModeProps {
	darkMode: boolean;
}

function TableData({ darkMode }: DarkModeProps) {
	return (
		<div className="rounded-t border-2 overflow-hidden">
			<table className="min-w-full text-left shadow-md">
				<thead
					className={`${darkMode ? "bg-gradient-to-br from-cyan-800 to-gray-900" : "bg-gradient-to-br from-blue-500 to-purple-500"} border-b`}
				>
					<tr>
						<th className="px-4 py-2">Statistiques</th>
						<th className="px-4 py-2">Chiffres</th>
						<th className="px-4 py-2">Sources</th>
					</tr>
				</thead>
				<tbody>
					<tr className={`${darkMode ? "" : "hover:bg-purple-100"}`}>
						<td className="px-4 py-2">Sites utilisant Tailwind (2025)</td>
						<td className="px-4 py-2">+323 000</td>
						<td className="px-4 py-2">
							<a
								href="https://trends.builtwith.com/framework/Tailwind-CSS"
								className="text-blue-500 underline"
								target="blank"
							>
								BuiltWith
							</a>
						</td>
					</tr>
					<tr className={`${darkMode ? "" : "hover:bg-purple-200"}`}>
						<td className="px-4 py-2">% de tous les sites web</td>
						<td className="px-4 py-2">0.2%</td>
						<td className="px-4 py-2">
							<a
								href="https://w3techs.com/technologies/details/cs-tailwind"
								className="text-blue-500 underline"
								target="blank"
							>
								W3Techs
							</a>
						</td>
					</tr>
					<tr className={`${darkMode ? "" : "hover:bg-purple-300"}`}>
						<td className="px-4 py-2">Framework CSS le plus adopté (2024)</td>
						<td className="px-4 py-2">#1</td>
						<td className="px-4 py-2">
							<a
								href="https://2024.stateofcss.com/en-US/tools/"
								className="text-blue-500 underline"
								target="blank"
							>
								State of CSS
							</a>
						</td>
					</tr>
					<tr className={`${darkMode ? "" : "hover:bg-purple-400"}`}>
						<td className="px-4 py-2">Adoption annuelle (2020)</td>
						<td className="px-4 py-2">+17.8%</td>
						<td className="px-4 py-2">
							<a
								href="https://wptavern.com/state-of-css-2020-survey-results-tailwind-css-wins-most-adopted-technology-utility-first-css-on-the-rise"
								className="text-blue-500 underline rounded"
							>
								WP Tavern
							</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default TableData;
