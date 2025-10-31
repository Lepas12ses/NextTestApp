type FilterTags = "liked";

export default interface Filter {
	tags: FilterTags[];
	search: string;
}
