import React, { useState, useEffect } from "react";
import CartBox from "./CartBox";
import CheckoutBox from "./CheckoutBox";
import { useStateContext } from "../context/StateProvider";
import { useHistory } from "react-router-dom";

function Cart() {
	const history = useHistory();
	const [total, setTotal] = useState();
	const {
		state: { cart },
	} = useStateContext();

	useEffect(() => {
		totalAmount();
	}, [cart]);

	const totalAmount = () => {
		let price = 0;
		cart.map((item) => (price += item.price));
		setTotal(price);
	};
	console.log(total);
	return (
		<div className=" flex bg-white w-screen h-screen pl-20 pr-20 pt-10 mt-2">
			{cart.length !== 0 ? (
				<>
					<div className="flex flex-col w-2/4">
						{cart.map((item) => (
							<CartBox prodDetails={item} />
						))}
					</div>
					<div className=" ml-10 w-1/3 bg-gray-200 h-32">
						<CheckoutBox total={total} />
					</div>
				</>
			) : (
				<div className="flex-col w-screen h-screen">
					<h2 className="flex text-3xl font-semibold justify-center align-center mt-44">
						Cart is empty
					</h2>
					<div className=" flex  align-center justify-center">
						<button
							className="bg-green-500 p-4 text-lg text-white font-medium w-52 mt-11"
							onClick={() => history.push("/")}>
							Go to Homepage
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default Cart;
