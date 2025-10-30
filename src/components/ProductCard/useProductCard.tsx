import { MouseEvent } from "react";

import { useAppDispatch, useAppSelector } from "@/src/store";
import { deleteProduct, likeProduct } from "@/src/store/products";

export default function useProductCard(productId: number) {
	const dispatch = useAppDispatch();
	const { likedProductsIds } = useAppSelector(state => state.products);

	const isLiked = likedProductsIds.indexOf(productId) !== -1;

	function handleDelete(e: MouseEvent) {
		e.preventDefault();

		dispatch(deleteProduct(productId));
	}

	function handleLike(e: MouseEvent) {
		e.preventDefault();

		dispatch(likeProduct(productId));
	}

	return {
		isLiked,
		handleDelete,
		handleLike,
	};
}
