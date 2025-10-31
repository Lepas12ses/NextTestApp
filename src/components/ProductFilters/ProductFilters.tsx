"use client";

import type { FC } from "react";
import useProductFilters from "./useProductFilters";

const ProductFilters: FC = () => {
	const { handleFavorite, handleSearch, isFavoriteOnly } = useProductFilters();

	return (
		<div className='flex py-4 px-2 bg-stone-200 rounded-xl'>
			<input onChange={handleSearch} placeholder='Поиск' />
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
