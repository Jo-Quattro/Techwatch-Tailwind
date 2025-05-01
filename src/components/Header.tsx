import "../index.css";

interface HeaderProps {
	darkMode: boolean;
	setDarkMode: (darkMode: boolean) => void;
}
function Header({ darkMode, setDarkMode }: HeaderProps) {
	return (
		<section
			className={`sticky top-0 blur-2xs w-screen flex  justify-between p-8 text-center rounded-b-4xl bg-linear-to-br/hsl ${darkMode ? " from-cyan-800 to-gray-950 from-0 to-60%" : " from-blue-800 to-cyan-200"}`}
		>
			<img
				className="w-16 "
				src="src/assets/tailwindLogo.svg"
				alt="logo tailwind CSS"
			/>
			<button
				type="button"
				onClick={() => {
					setDarkMode(!darkMode);
				}}
				className={`border-2 rounded-full border-transparent ${darkMode ? " hover:border-amber-400 shadow-amber-300" : " hover:border-black hover:shadow-gray-300"} transition duration-300`}
			>
				<img
					className="w-16 h-16"
					src={
						darkMode ? "src/assets/light-mode.png" : "src/assets/dark-mode.png"
					}
					alt="Icône de mode sombre/clair"
				/>
			</button>
		</section>
	);
}
export default Header;
