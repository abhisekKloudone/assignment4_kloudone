import React, { useState, useEffect } from "react";
import ProductBox from "./ProductBox";
import { Link } from "react-router-dom";

function Home() {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((item) => setProduct(item));
	}, []);
	console.log(product);

	return (
		<div className="w-screen h-screen ">
			<div className="bg-gray-800  flex flex-wrap object-center pl-20 pr-20">
				{product.map((item) => (
					<Link to="/product/{item.id}">
						<ProductBox key={item.id} image={item.image} title={item.title} />
					</Link>
				))}
			</div>
		</div>
	);
}

export default Home;
