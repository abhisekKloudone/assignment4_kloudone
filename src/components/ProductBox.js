import React from "react";

function ProductBox({ product }) {
	return (
		<div className="bg-slate-100 w-72 m-5 shadow-2xl">
			<img className="w-72 h-72 cursor-pointer" src={product.image} alt="" />
			<h2 className="text-lg font-semibold p-3 text-gray-900 content-center flex justify-center cursor-pointer">
				{product.title}
			</h2>
			<p className="flex justify-center font-semibold">₹ {product.price}</p>
		</div>
	);
}

export default ProductBox;
