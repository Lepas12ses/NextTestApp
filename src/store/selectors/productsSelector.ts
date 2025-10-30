import { RootState } from "..";

export default function productsSelector(state: RootState) {
	return state.products;
}
