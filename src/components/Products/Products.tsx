import productsService from "@/src/service/ProductService";
import type { FC } from "react";

const Products: FC = async () => {
	const products = await productsService.getProducts();

	return (
		<ul>
			{products.map(product => (
				<li key={product.id}>
					<p>{product.title}</p>
				</li>
			))}
		</ul>
	);
};

export default Products;
