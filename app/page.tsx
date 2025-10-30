import Products from "@/src/components/Products/Products";
import { Suspense } from "react";

export default function Home() {
	return (
		<>
			<header className='bg-purple-200 flex justify-center mb-5'>
				<h1 className='text-5xl font-bold py-8'>Продукты</h1>
			</header>
			<main>
				<Suspense fallback={<p>Loading...</p>}>
					<Products />
				</Suspense>
			</main>
		</>
	);
}
