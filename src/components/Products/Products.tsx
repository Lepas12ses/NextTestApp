import productsService from "@/src/service/ProductService";
import type { FC } from "react";
import ProductCard from "../ProductCard/ProductCard";

const Products: FC = async () => {
	const products = await productsService.getProducts();

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
