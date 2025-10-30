import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({ reducer: { products: productsReducer } });

type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
type AppDispatch = AppStore["dispatch"];

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function makeStore(initialState: RootState) {
	return configureStore({
		reducer: { products: productsReducer },
		preloadedState: initialState,
	});
}

export default store;
