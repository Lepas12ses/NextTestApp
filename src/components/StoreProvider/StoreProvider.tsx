"use client";

import Product from "@/src/schema/Product";
import { makeStore } from "@/src/store";
import type { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";

interface StoreProviderProps extends PropsWithChildren {
	products?: Product[];
}

const StoreProvider: FC<StoreProviderProps> = ({ children, products = [] }) => {
	return (
		<Provider
			store={makeStore({
				products: {
					products: products,
				},
			})}
		>
			{children}
		</Provider>
	);
};

export default StoreProvider;
