import React from "react";
import ProductBox from "./ProductBox";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/StateProvider.js";

function Home() {
	const {
		state: { products },
	} = useStateContext();

	console.log(products);

	return (
		<div className="w-screen h-screen mt-5">
			<div className="bg-white  flex flex-wrap object-center pl-20 pr-20">
				{products.map((product) => (
					<div key={product.id}>
						<Link to={`/product/${product.id}`}>
							<ProductBox product={product} />
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export default Home;
