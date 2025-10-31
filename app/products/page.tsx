import ProductFilters from "@/src/components/ProductFilters/ProductFilters";
import Products from "@/src/components/Products/Products";

import { Suspense } from "react";

export default function Home() {
	return (
		<main className='flex flex-col items-center gap-5'>
			<ProductFilters />
			<Suspense fallback={<p>Загрузка...</p>}>
				<Products />
			</Suspense>
		</main>
	);
}
