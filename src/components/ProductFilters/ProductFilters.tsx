"use client";

import { useAppDispatch, useAppSelector } from "@/src/store";
import { setFilter } from "@/src/store/products";
import productsSelector from "@/src/store/selectors/productsSelector";
import type { FC } from "react";

const ProductFilters: FC = () => {
	const { filter } = useAppSelector(productsSelector);
	const dispatch = useAppDispatch();

	const isFavoriteOnly =
		filter?.tags.find(tag => tag === "liked") !== undefined;

	function handleFavorite() {
		if (!isFavoriteOnly) {
			dispatch(
				setFilter({
					...filter,
					tags: ["liked"],
				})
			);
			return;
		}

		dispatch(
			setFilter({
				...filter,
				tags: filter.tags.filter(value => value !== "liked"),
			})
		);
	}

	return (
		<div className='flex py-4 px-2 bg-stone-200 rounded-xl'>
			<button
				onClick={handleFavorite}
				className={`py-1 px-2 rounded-full bg-stone-300 
                            border border-stone-400 cursor-pointer ${
															isFavoriteOnly ? "bg-stone-900 text-stone-50" : ""
														}`}
			>
				Только понравившиеся
			</button>
		</div>
	);
};

export default ProductFilters;
