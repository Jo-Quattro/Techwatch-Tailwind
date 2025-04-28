import "../index.css";

interface HeaderProps {
	darkMode: boolean;
	setDarkMode: (darkMode: boolean) => void;
}
function Header({ darkMode, setDarkMode }: HeaderProps) {
	return (
		<header
			className={`sticky top-0 blur-2xs w-screen flex  justify-between p-8 text-center rounded-b-4xl bg-linear-to-br/hsl${darkMode ? " from-cyan-800 to-gray-950" : " from-blue-600 to-cyan-400"}`}
		>
			<img
				className="w-15 "
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
					className="w-15 h-15"
					src={
						darkMode ? "src/assets/light-mode.png" : "src/assets/dark-mode.png"
					}
					alt="Icône de mode sombre/clair"
				/>
			</button>
		</header>
	);
}
export default Header;
