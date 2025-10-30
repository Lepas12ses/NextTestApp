"use client";

import { useAppSelector } from "@/src/store";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { FC } from "react";

interface ProductDetailsProps {
	id: string;
}

const ProductDetails: FC<ProductDetailsProps> = ({ id }) => {
	const product = useAppSelector(state => state.products).products.find(
		product => {
			return product.id == id;
		}
	);

	if (!product) notFound();

	return (
		<div className='flex flex-col items-center gap-3'>
			<div className='h-72 w-full bg-stone-100 p-3'>
				<div className='relative h-full'>
					<Image
						className='object-contain'
						src={product.image}
						alt={product.title}
						sizes='30vw'
						fill
					/>
				</div>
			</div>
			<div className='w-130 flex flex-col gap-3'>
				<p className='text-xl font-bold'>{product.title}</p>
				<div>
					<p>Описание:</p>
					<p className='text-md text-stone-500'>{product.description}</p>
				</div>
				<p>
					Цена: <span className='text-stone-500'>${product.price}</span>
				</p>
			</div>
		</div>
	);
};

export default ProductDetails;
