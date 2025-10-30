import Products from "@/src/components/Products/Products";

import { Suspense } from "react";

export default function Home() {
	return (
		<main className='flex justify-center'>
			<Suspense fallback={<p>Загрузка...</p>}>
				<Products />
			</Suspense>
		</main>
	);
}
