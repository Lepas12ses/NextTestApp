"use client";
import { type FC } from "react";

import ProductCard from "../ProductCard/ProductCard";
import { useAppSelector } from "@/src/store";

const Products: FC = () => {
	const { products } = useAppSelector(state => state.products);

	return (
		<div className='flex justify-center'>
			<ul className='grid grid-cols-3 w-fit gap-5'>
				{products.map(product => (
					<li key={product.id}>
						<ProductCard product={product} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Products;
