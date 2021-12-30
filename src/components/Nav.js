import React from "react";
import { AiFillShopping } from "react-icons/ai";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<div className="bg-white h-16 w-full pt-5 flex justify-evenly shadow-2xl">
			<Link to="/">
				<h2 className="text-black font-semibold cursor-pointer">
					RANDOM STORE
				</h2>
			</Link>
			<div className="flex space-x-10">
				<Link to="/cart">
					<AiFillShopping className="text-black text-xl cursor-pointer" />
				</Link>
			</div>
		</div>
	);
}

export default Nav;
