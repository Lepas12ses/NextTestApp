import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "../schema/Product";

interface IProductsSlice {
	products: Product[];
}

const initial: IProductsSlice = {
	products: [],
};

const productsSlice = createSlice({
	name: "products",
	initialState: initial,
	reducers: {
		addProducts(state, action: PayloadAction<Product[]>) {
			state.products.push(...action.payload);
		},
	},
});

const productsReducer = productsSlice.reducer;

export const { addProducts } = productsSlice.actions;
export default productsReducer;
