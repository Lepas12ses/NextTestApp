import { notFound } from "next/navigation";
import type { FC } from "react";

interface ProducDetailsPageProps {
	params: Promise<{ id: string }>;
}

const ProductDetailsPage: FC<ProducDetailsPageProps> = async ({ params }) => {
	const { id } = await params;

	if (!id) notFound();

	return <div>{id}</div>;
};

export default ProductDetailsPage;
