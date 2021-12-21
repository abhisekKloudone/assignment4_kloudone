import React from "react";
import { Link } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";

function Nav() {
	return (
		<div className="bg-black h-16 w-full pt-5">
			<div className="flex justify-evenly">
				<h2 className="text-white font-semibold">RANDOM STORE</h2>
				<div className="flex space-x-10">
					<h2 className="text-white font-semibold">HOME</h2>
					<h2 className="text-white font-semibold">ABOUT</h2>
					<h2 className="text-white font-semibold">LOGIN</h2>
					<Link to="/cart">
						<AiFillShopping className="text-white text-xl cursor-pointer" />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Nav;
