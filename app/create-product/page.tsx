import ProductForm from "@/src/components/ProductForm/ProductForm";
import type { FC } from "react";

const CreateProductPage: FC = () => {
	return (
		<main className='flex justify-center'>
			<ProductForm />
		</main>
	);
};

export default CreateProductPage;
