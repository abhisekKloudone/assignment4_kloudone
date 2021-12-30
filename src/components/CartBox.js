import React, { useState } from "react";
import { useStateContext } from "../context/StateProvider";

function CartBox({ prodDetails }) {
	const [itemCount, setItemCount] = useState(0);
	const {
		state: { cart },
		dispatch,
	} = useStateContext();
	return (
		<div className="w-full flex bg-gray-200 mb-3 ml-5">
			<img className="w-80 p-2 max-h-52" src={prodDetails.image} alt="" />
			<div className=" pt-5 pl-5">
				<h2 className="mb-2">{prodDetails.title}</h2>
				<h2 className="mb-14">₹ {prodDetails.price}</h2>
				<div className="flex">
					<button
						className="bg-gray-400 p-3 ml-1 cursor-pointer"
						onClick={() => setItemCount(itemCount - 1)}
						disabled={itemCount === 0}>
						-
					</button>
					<h2 className="p-3">{itemCount}</h2>

					<button
						className="bg-gray-400 p-3 mr-1 cursor-pointer"
						onClick={() => setItemCount(itemCount + 1)}>
						+
					</button>

					<button
						className="bg-gray-400 p-2 ml-8"
						onClick={() =>
							dispatch({
								type: "REMOVE_PRODUCT",
								payload: prodDetails.id,
							})
						}>
						Remove
					</button>
				</div>
			</div>
		</div>
	);
}

export default CartBox;
