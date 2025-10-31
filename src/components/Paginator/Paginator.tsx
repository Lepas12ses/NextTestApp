"use client";

import { setPage } from "@/src/store/products";
import type { FC } from "react";
import { useDispatch } from "react-redux";
import PageButton from "./PageButton";

interface PaginatorProps {
	pagesCount: number;
	page: number;
}

const Paginator: FC<PaginatorProps> = ({ page, pagesCount }) => {
	const dispatch = useDispatch();

	function toPage(page: number) {
		dispatch(setPage(page));
	}

	return (
		<nav>
			<ul className='gap-2 flex mx-auto w-fit'>
				{new Array(pagesCount).fill(1).map((_, index) => {
					const buttonPage = index + 1;
					return (
						<li key={index}>
							<PageButton
								disabled={buttonPage === page}
								onClick={() => toPage(buttonPage)}
							>
								{buttonPage}
							</PageButton>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Paginator;
