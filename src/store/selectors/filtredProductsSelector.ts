import { createSelector } from "@reduxjs/toolkit";
import productsSelector from "./productsSelector";

const filteredProductsSelector = createSelector([productsSelector], state => {
	const { products, filter, likedProductsIds } = state;

	let result = [...products];

	if (!filter) return result;

	filter.tags?.forEach(tag => {
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

	return result;
});

export default filteredProductsSelector;
