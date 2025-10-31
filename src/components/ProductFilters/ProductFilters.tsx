"use client";

import type { FC } from "react";
import useProductFilters from "./useProductFilters";

const ProductFilters: FC = () => {
	const { handleFavorite, handleSearch, isFavoriteOnly, search } =
		useProductFilters();

	return (
		<div className='flex gap-2 py-4 px-2 bg-stone-200 rounded-xl'>
			<input
				className='rounded-full bg-stone-50 px-3'
				onChange={handleSearch}
				placeholder='Поиск'
				defaultValue={search}
			/>
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
