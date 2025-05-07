import { useState } from "react";
import Advantage from "./components/Advantage";
import Compare from "./components/Compare";
import Header from "./components/Header";
import "./index.css";
import Grid from "./components/Grid";
import { motion } from "motion/react";
import TableData from "./components/TableData";

function App() {
	const [darkMode, setDarkMode] = useState(false);

	return (
		<div
			className={`flex items-center flex-col bg-linear-to-br/hsl ${darkMode ? " from-gray-900  to-gray-950" : " from-blue-200 to-cyan-200"} min-h-screen transition-colors duration-700`}
		>
			{/* HEADER */}
			<header
				className={` top-0 sticky pb-px rounded-b-4xl ${darkMode ? "animate-rotate-border bg-conic/[from_var(--border-angle)] from-gray-700 via-cyan-400 to-gray-700 from-70% via-85% to-100%" : " bg-blue-300"} `}
			>
				<Header darkMode={darkMode} setDarkMode={setDarkMode} />
			</header>
			{/* MAIN */}
			<main
				className={`max-w-4xl p-px rounded-lg m-5 ${darkMode ? "animate-rotate-border bg-conic/[from_var(--border-angle)] from-gray-700 via-cyan-400 to-gray-700 from-80% via-90% to-100%" : " "} `}
			>
				<main
					className={`max-w-4xl p-3 rounded-lg space-y-20 bg-gradient-to-br ${darkMode ? " from-cyan-800 to-gray-950 from-0 to-30% text-white" : " "}`}
				>
					<motion.h1
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 2 }}
						className="text-5xl font-bold mb-14 text-center "
					>
						{/* need to try this : https://www.youtube.com/watch?v=blUpQMJjObE&ab_channel=TomIsLoading */}
						Tailwind CSS v4
					</motion.h1>
					{/* Presentation / intro */}
					<section id="intro" className=" text-center">
						<h2 className="h2">🔍 Qu'est-ce que Tailwind CSS ?</h2>
						<p>
							Créé par Adam Wathan, Steve Schoger, Jonathan Reinink et David
							Hemphill, Tailwind CSS est un framework{" "}
							<a
								className="font-semibold underline"
								href="https://github.com/tailwindlabs/tailwindcss"
								target="blank"
							>
								{" "}
								Open-source
							</a>{" "}
							dit
							<span className=" group text-purple-400 font-semibold mx-1">
								utility-first
								<span className="absolute top-[48%] mt-2 w-max min-w-[150px] -translate-x-1/2 rounded-lg bg-gray-800 text-white text-xs px-3 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none ">
									Utilisation de classes utilitaires fournies par Tailwind
									plutôt que de les écrire directement dans un fichier CSS.
								</span>
							</span>
							qui permet de construire rapidement des interfaces modernes,
							responsives et bien pensées. Netflix et GitHub ont adopté Tailwind
							CSS
						</p>
					</section>

					{/* Avantages Tailwind(V4) */}
					<section id="avantages">
						<h2 className="h2">🎉Nouveautés & Avantages.</h2>

						<div className="space-y-6">
							<Advantage
								darkMode={darkMode}
								title="⚡️ Compilation ultra rapide"
								description="Tailwind v4 a été entierement réécrit en Rust. Il utilise le moteur Lightning CSS pour une compilation jusqu’à 10x plus rapide."
								extendedDescription="Tailwind CSS v4 tire parti de la puissance de Rust et du moteur Lightning CSS pour révolutionner les performances de compilation. 
								Grâce à cette refonte, même les projets comportant des milliers de composants et de classes utilitaires peuvent être compilés en quelques secondes. Ce gain de rapidité transforme l'expérience développeur : moins de temps d'attente, plus de productivité, et un cycle itératif de développement beaucoup plus fluide."
							/>
							<Advantage
								darkMode={darkMode}
								title="🎨 Palette de couleurs améliorée"
								description="Nouvelle palette de couleurs avec des contrastes améliorés, idéale pour la conception accessible."
								extendedDescription="La nouvelle palette de Tailwind v4 a été conçue pour offrir des contrastes encore plus marqués, rendant les interfaces non seulement plus esthétiques mais surtout plus accessibles aux utilisateurs atteints de déficiences visuelles. Elle respecte les normes WCAG pour garantir une meilleure lisibilité et propose une gamme étendue de nuances permettant de créer des designs plus dynamiques, expressifs et harmonieux sans sacrifier l'accessibilité."
							/>
							<Advantage
								darkMode={darkMode}
								title="🧠 Design tokens & variables CSS intégrés"
								description="Grâce aux variables CSS, il est facile de personnaliser les propriétés globales de ton design."
								extendedDescription="En éliminant des dépendances lourdes comme PostCSS et en recentrant le coeur du framework sur l'essentiel, Tailwind CSS v4 allège considérablement la charge du projet. Moins de dépendances signifie moins de vulnérabilités potentielles, des installations plus rapides et des mises à jour plus simples. Cette réduction du poids global améliore également les performances de compilation et le temps de chargement des applications en production."
							/>
							<Advantage
								darkMode={darkMode}
								title="👨🏻‍💻 Zéro config par défaut"
								description="Pas besoin de configurer PostCSS, Tailwind est prêt à l'emploi dès l'installation."
								extendedDescription="La philosophie zero-config de Tailwind v4 offre un énorme avantage, surtout pour les nouveaux projets ou les prototypes rapides. Plus besoin de configurer PostCSS, d'installer des plugins tiers ou de configurer manuellement purgeCSS : tout est prêt dès l'installation. Cela réduit drastiquement la barrière d'entrée pour les nouveaux développeurs et permet aux équipes de se concentrer directement sur la création d'interfaces sans perte de temps."
							/>
							<Advantage
								darkMode={darkMode}
								title="🪶 Moins de dépendances, plus léger"
								description="Réduction des dépendances externes pour un bundle plus léger et rapide à charger."
								extendedDescription="En éliminant des dépendances lourdes comme PostCSS et en recentrant le coeur du framework sur l'essentiel, Tailwind CSS v4 allège considérablement la charge du projet. Moins de dépendances signifie moins de vulnérabilités potentielles, des installations plus rapides et des mises à jour plus simples. Cette réduction du poids global améliore également les performances de compilation et le temps de chargement des applications en production."
							/>
						</div>
					</section>

					{/* CSS classique vs Tailwind */}
					<Compare />
					<h2 className="h2"> Les grid 🏁</h2>
					<div
						className={` rounded bg-gradient-to-br ${darkMode ? "from-cyan-800 to-gray-900" : "from-pink-300 to-blue-400"}`}
					>
						<Grid />
					</div>
					<div
						className={` mb-40 p-6 rounded-lg shadow-lg bg-linear-to-br/hsl${darkMode ? " from-green-500 to-green-900" : " from-green-700 to-green-500"}`}
					>
						<p>
							Voici un petit exemple de grille avec Tailwind, simple à mettre en
							place en utilisant seulement quleques classes, tout en conservant
							un rendu propre quelque soit le format d’écran,
						</p>
					</div>
					<div className="mb-40">
						<h2 className="h2"> Les Tableaux 📊</h2>
						<TableData darkMode={darkMode} />
					</div>
					<div className="text-center">
						<button
							type="button"
							onClick={() => {
								window.scrollTo({ top: 0, behavior: "smooth" });
							}}
							className={`mt-10 px-6 py-3 border-1 border-gray-500 rounded shadow-2xl text-white hover:brightness-115 hover:border-gray-700 active:brightness-135 bg-linear-to-br/hsl ${darkMode ? " from-gray-700  to-gray-900" : " from-pink-500 to-violet-500"}`}
						>
							Retour en haut de page
						</button>
					</div>
				</main>
			</main>
			<footer
				className={`rounded-t-xl pt-px ${darkMode && "animate-rotate-border bg-conic/[from_var(--border-angle)] from-gray-700 via-cyan-400 to-gray-700 from-70% via-85% to-100%"} `}
			>
				<footer className="flex flex-col justify-center rounded-t-xl w-screen items-center p-4 bg-gradient-to-tl from-cyan-800 to-gray-950  text-white">
					<p>&copy; 2025 - Tailwind CSS v4</p>
					<a
						href="https://www.flaticon.com/fr/icones-gratuites/lune"
						title="soleils icônes"
					>
						Icônes modes sombre/standard créées par Vectors Market - Flaticon
					</a>
				</footer>
			</footer>
		</div>
	);
}

export default App;
