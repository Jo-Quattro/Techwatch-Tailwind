import mer from "../assets/grid-pictures/mer.jpg";
import merAtheor from "../assets/grid-pictures/merAntheor.jpg";
import villasAtheor from "../assets/grid-pictures/villasAntheor.jpg";
import merAtheor3 from "../assets/grid-pictures/merAntheor3.jpg";
import viaducAtheor from "../assets/grid-pictures/viaducAntheor.jpg";
import sunSetAntheor from "../assets/grid-pictures/sunSetAntheor.jpg";
import { motion, spring } from "motion/react";

function Grid() {
	return (
		<motion.div
			layout
			transition={spring}
			className=" rounded grid grid-cols-3 overflow-hidden p-4 gap-2 "
		>
			<motion.div
				layout
				className=" col-span-3 overflow-hidden row-span-2  sm:col-span-2 md:row-span-2 lg:col-span-1 lg:row-span-1 rounded"
			>
				<img
					src={merAtheor}
					alt="mer Atheor"
					className="w-full h-full object-cover"
				/>
			</motion.div>
			<motion.div
				layout
				className=" rounded overflow-hidden max-sm:hidden md:row-span-1"
			>
				<img src={mer} alt="mer grece" className="object-fit" />
			</motion.div>
			<motion.div
				layout
				className="  rounded  overflow-hidden max-md:hidden md:row-span-1"
			>
				<img src={villasAtheor} alt="villas Antheor" />
			</motion.div>
			<motion.div
				layout
				className="  rounded overflow-hidden max-md:hidden md:row-span-1"
			>
				<img src={merAtheor3} alt="mer Antheor" />
			</motion.div>
			<motion.div
				layout
				className="  rounded overflow-hidden max-sm:hidden sm:row-span-1"
			>
				<img src={viaducAtheor} alt="viaducAtheor" />
			</motion.div>
			<motion.div
				layout
				className=" rounded overflow-hidden max-md:hidden lg:col-span-1 "
			>
				<img src={sunSetAntheor} alt="sunset Antheor" />
			</motion.div>
		</motion.div>
	);
}
export default Grid;
