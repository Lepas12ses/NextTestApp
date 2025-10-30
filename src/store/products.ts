import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "../schema/Product";

interface IProductsSlice {
	products: Product[];
	likedProductsIds: string[];
}

const initial: IProductsSlice = {
	products: [],
	likedProductsIds: [],
};

const productsSlice = createSlice({
	name: "products",
	initialState: initial,
	reducers: {
		addProducts(state, action: PayloadAction<Product[]>) {
			state.products.push(...action.payload);
		},
		deleteProduct(state, action: PayloadAction<string>) {
			state.products = state.products.filter(
				product => product.id != action.payload
			);
		},
		likeProduct(state, action: PayloadAction<string>) {
			const index = state.likedProductsIds.indexOf(action.payload);
			if (index !== -1) state.likedProductsIds.splice(index, 1);
			else state.likedProductsIds.push(action.payload);
		},
	},
});

const productsReducer = productsSlice.reducer;

export const { addProducts, deleteProduct, likeProduct } =
	productsSlice.actions;
export default productsReducer;
