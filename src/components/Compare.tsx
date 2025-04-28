import "../index.css";

function Compare() {
	return (
		<section id="comparaison">
			<h2 className="text-2xl font-semibold text-center mb-4">
				🆚 Classic CSS / Inline Tailwind
			</h2>
			<div className="grid md:flex items-center justify-center gap-4 w-full ">
				<div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-xl w-89 h-55 border-2 border-blue-500">
					<h3 className="font-bold mb-2 text-gray-200">🎭 CSS classique</h3>

					<pre className="text-sm text-gray-700 dark:text-gray-300 mt-2">
						{"// index.css"} <br />
						<span className="text-orange-200">.btn</span>{" "}
						<span className="text-yellow-200">&#123;</span>
						<br />
						<span className="text-blue-300">background-color</span>:{" "}
						<span className="text-orange-300">#4F46E5</span>
						<span>;</span>
						<br />
						<span className="text-blue-300">color</span>:{" "}
						<span className="text-orange-300">white</span>
						<span>;</span>
						<br />
						<span className="text-blue-300">border-radius</span>:{" "}
						<span className="text-orange-300">0.2rem</span>
						<span>;</span>
						<br />
						<span className="text-yellow-200">&#125;</span>
					</pre>
					<pre className="text-sm text-gray-700 dark:text-gray-300">
						{"// index.html"} <br />
						<code>
							<span className="text-gray-400">&lt;</span>
							<span className="text-blue-500">button</span>
							<span className="text-blue-300"> className</span>
							<span className="text-white">=</span>
							<span className="text-orange-300">"btn"</span>
							<span className="text-gray-400">&gt;</span>
							<span className="text-white">Cliquez</span>
							<span className="text-gray-400">&lt;/</span>
							<span className="text-blue-500">button</span>
							<span className="text-gray-400">&gt;</span>
						</code>
					</pre>
				</div>
				<div className="flex flex-col bg-gray-100 dark:bg-gray-800 p-2 rounded-xl w-89 h-55 border-2 border-cyan-500">
					<h3 className="font-bold mb-2 text-gray-200">🦋 Avec Tailwind</h3>
					<pre className="text-sm text-gray-700 dark:text-gray-300">
						{"// Component.tsx"} <br />
						<code>
							<span className="text-gray-400">&lt;</span>
							<span className="text-blue-500">button</span>
							<span className="text-blue-300"> class</span>
							<span className="text-white">=</span>
							<span className="text-orange-300">
								"bg-indigo-600 text-white <br />
								rounded"
							</span>
							<span className="text-gray-400">&gt;</span>
							<br />
							<span className="text-white">Cliquez</span>
							<br />

							<span className="text-gray-400">&lt;/</span>
							<span className="text-blue-500">button</span>
							<span className="text-gray-400">&gt;</span>
						</code>
					</pre>
					<p className="mt-10 text-sm text-gray-600 dark:text-gray-400 ">
						→ Tout est lisible au même endroit.
					</p>
				</div>
			</div>
		</section>
	);
}
export default Compare;
