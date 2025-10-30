import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "../schema/Product";
import Filter from "../schema/Filter";

interface IProductsSlice {
	products: Product[];
	likedProductsIds: number[];
	filter?: Filter;
}

export const initialProducts: IProductsSlice = {
	products: [],
	likedProductsIds: [1, 2],
	filter: {
		tags: ["liked"],
	},
};

const productsSlice = createSlice({
	name: "products",
	initialState: initialProducts,
	reducers: {
		addProducts(state, action: PayloadAction<Product[]>) {
			state.products.push(...action.payload);
		},
		deleteProduct(state, action: PayloadAction<number>) {
			const id = action.payload;

			state.products = state.products.filter(product => product.id !== id);
		},
		likeProduct(state, action: PayloadAction<number>) {
			const id = action.payload;

			const index = state.likedProductsIds.indexOf(id);
			if (index !== -1) state.likedProductsIds.splice(index, 1);
			else state.likedProductsIds.push(id);
		},
	},
});

const productsReducer = productsSlice.reducer;

export const { addProducts, deleteProduct, likeProduct } =
	productsSlice.actions;
export default productsReducer;
