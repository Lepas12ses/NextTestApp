import useDebounce from "@/src/hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "@/src/store";
import { setFilter } from "@/src/store/products";
import productsSelector from "@/src/store/selectors/productsSelector";
import type { ChangeEvent } from "react";

export default function useProductFilters() {
	const { filter } = useAppSelector(productsSelector);
	const dispatch = useAppDispatch();

	const isFavoriteOnly =
		filter?.tags.find(tag => tag === "liked") !== undefined;

	function handleFavorite() {
		if (!isFavoriteOnly) {
			dispatch(
				setFilter({
					...filter,
					tags: ["liked"],
				})
			);
			return;
		}

		dispatch(
			setFilter({
				...filter,
				tags: filter.tags.filter(value => value !== "liked"),
			})
		);
	}

	function handleSearch(event: ChangeEvent<HTMLInputElement>) {
		dispatch(
			setFilter({
				...filter,
				search: event.target.value,
			})
		);
	}

	const debouncedSearch = useDebounce(handleSearch);

	return {
		handleFavorite,
		handleSearch: debouncedSearch,
		isFavoriteOnly,
		search: filter.search,
	};
}
