import React from "react";

function ProductBox({ image, title }) {
	return (
		<div className="bg-slate-400 w-72 m-5">
			<img className="w-72 h-72" src={image} alt="" />
			<h2 className="text-lg font-semibold p-3 text-gray-900 content-center flex justify-center">
				{title}
			</h2>
		</div>
	);
}

export default ProductBox;
