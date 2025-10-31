import ProductDetails from "@/src/components/ProductDetails";
import type { FC } from "react";

interface ProducDetailsPageProps {
	params: Promise<{ id: number }>;
}

export async function generateStaticParams() {
	return new Array(100).fill(1).map((_, index) => ({
		id: `${index + 1}`,
	}));
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
