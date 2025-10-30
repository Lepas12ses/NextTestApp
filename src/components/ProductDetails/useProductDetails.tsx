import { useAppSelector } from "@/src/store";
import { notFound } from "next/navigation";

export default function useProductDetails(id: string) {
	const product = useAppSelector(state => state.products).products.find(
		product => {
			return product.id == id;
		}
	);

	if (!product) notFound();

	return product;
}
