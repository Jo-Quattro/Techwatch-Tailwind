function Grid() {
	return (
		<div className="grid grid-cols-3 min-w-10/12 h-100 mb-50 gap-4">
			<div className="bg-blue-500  col-span-3 row-span-2 rounded sm:col-span-2 md:row-span-1 lg:col-span-1">
				1
			</div>
			<div className="bg-green-500 rounded max-sm:hidden sm:col-span-1">2</div>
			<div className="bg-purple-500 rounded  max-md:hidden md:col-span-1">
				3
			</div>
			<div className="bg-yellow-500 rounded max-md:hidden md:row-span-1">4</div>
			<div className="bg-red-500 rounded max-sm:hidden sm:row-span-1">5</div>
			<div className="bg-pink-500 rounded max-lg:hidden lg:col-span-1 ">6</div>
		</div>
	);
}
export default Grid;
