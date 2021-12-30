import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useStateContext } from "../context/StateProvider";

function ProductDetail() {
	const [prod, setProd] = useState([]);
	const {
		state: { products },
		dispatch,
	} = useStateContext();

	const { id } = useParams();

	useEffect(() => {
		const response = products;
		response.forEach((item) => {
			if (item.id == id) {
				setProd(item);
			}
		});
	}, [id]);

	return (
		<div className="flex bg-white w-full h-screen pl-20 pr-20 pt-10 shadow-2xl">
			<img className="w-1/3 h-3/4 shadow-2xl" src={prod.image} alt="" />
			<div className="ml-48 mt-20">
				<h2 className="text-black mb-10 text-lg">{prod.category}</h2>
				<h2 className="text-black mb-10 text-3xl font-bold">{prod.title}</h2>
				<h2 className="text-black mb-10 text-lg">{prod.description}</h2>
				<h2 className="text-black mb-10 text-2xl font-bold">₹ {prod.price}</h2>
				<Link to="/cart">
					<button
						className="bg-slate-300 mr-5 p-5 font-bold text-lg"
						onClick={() =>
							dispatch({
								type: "SET_CART",
								payload: prod,
							})
						}>
						ADD TO CART
					</button>
				</Link>
			</div>
		</div>
	);
}

export default ProductDetail;
