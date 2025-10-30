"use client";

import { type FC } from "react";

import ProductCard from "../ProductCard";
import { useAppSelector } from "@/src/store";
import filteredProductsSelector from "@/src/store/selectors/filtredProductsSelector";

const Products: FC = () => {
	const products = useAppSelector(filteredProductsSelector);

	return (
		<ul className='grid grid-cols-3 w-fit gap-5'>
			{products.map(product => (
				<li key={product.id}>
					<ProductCard
						productId={product.id}
						title={product.title}
						image={product.image}
						price={product.price}
					/>
				</li>
			))}
		</ul>
	);
};

export default Products;
