import ProductDetails from "@/src/components/ProductDetails";
import type { FC } from "react";

interface ProducDetailsPageProps {
	params: Promise<{ id: number }>;
}

const ProductDetailsPage: FC<ProducDetailsPageProps> = async ({ params }) => {
	const { id } = await params;

	return (
		<main className='flex justify-center'>
			<ProductDetails id={id} />
		</main>
	);
};

export default ProductDetailsPage;
