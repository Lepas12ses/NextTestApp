import { createSelector } from "@reduxjs/toolkit";
import productsSelector from "./productsSelector";

const LIMIT = 6;

const filteredProductsSelector = createSelector([productsSelector], state => {
	const { products, filter, likedProductsIds, page } = state;

	let result = [...products];
	const { tags, search } = filter;

	tags.forEach(tag => {
		switch (tag) {
			case "liked": {
				result = result.filter(
					product =>
						likedProductsIds.find(likedId => likedId == product.id) !==
						undefined
				);
				break;
			}
		}
	});

	if (search.length) {
		result = result.filter(product =>
			product.title.toLowerCase().includes(search.toLowerCase())
		);
	}

	const total = result.length;
	const pagesCount = Math.ceil(total / LIMIT);

	const start = (page - 1) * LIMIT;
	const end = Math.min(start + LIMIT, result.length);

	result = result.slice(start, end);

	return { products: result, page, pagesCount };
});

export default filteredProductsSelector;
