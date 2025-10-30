import ProductDetails from "@/src/components/ProductDetails/ProductDetails";
import type { FC } from "react";

interface ProducDetailsPageProps {
	params: Promise<{ id: string }>;
}

const ProductDetailsPage: FC<ProducDetailsPageProps> = async ({ params }) => {
	const { id } = await params;

	return (
		<main>
			<ProductDetails id={id} />
		</main>
	);
};

export default ProductDetailsPage;
