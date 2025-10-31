import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "../schema/Product";
import Filter from "../schema/Filter";
import NewProduct from "../schema/NewProduct";

interface IProductsSlice {
	products: Product[];
	likedProductsIds: number[];
	filter: Filter;
	page: number;
}

export const initialProducts: IProductsSlice = {
	products: [],
	likedProductsIds: [],
	page: 1,
	filter: {
		tags: [],
		search: "",
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

			const likedIndex = state.likedProductsIds.indexOf(id);
			if (likedIndex !== -1) state.likedProductsIds.splice(likedIndex, 1);

			const productIndex = state.products.findIndex(
				product => product.id === id
			);
			if (productIndex !== -1) state.products.splice(productIndex, 1);
		},
		likeProduct(state, action: PayloadAction<number>) {
			const id = action.payload;

			const index = state.likedProductsIds.indexOf(id);
			if (index !== -1) state.likedProductsIds.splice(index, 1);
			else state.likedProductsIds.push(id);
		},
		setFilter(state, action: PayloadAction<Filter>) {
			state.filter = action.payload;
			state.page = 1;
		},
		createProduct(state, action: PayloadAction<NewProduct>) {
			const { title, description, price } = action.payload;

			const id = Math.max(...state.products.map(item => item.id)) + 1;

			state.products.push({
				id,
				title,
				description,
				price,
			});
		},
		setPage(state, action: PayloadAction<number>) {
			state.page = action.payload;
		},
	},
});

const productsReducer = productsSlice.reducer;

export const {
	addProducts,
	deleteProduct,
	likeProduct,
	setFilter,
	createProduct,
	setPage,
} = productsSlice.actions;
export default productsReducer;
