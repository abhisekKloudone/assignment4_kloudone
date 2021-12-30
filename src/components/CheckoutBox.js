import React from "react";

function CheckoutBox({ total }) {
	return (
		<div className="pt-5 ">
			<h2 className="flex justify-center align-center font-bold text-xl tracking-wider">
				CHECKOUT
			</h2>
			<div className="pt-10 ">
				<h2 className=" text-white text-lg font-semibold bg-green-500 p-3 flex justify-center cursor-pointer">
					Total Price : ₹ {total}
				</h2>
			</div>
		</div>
	);
}

export default CheckoutBox;
