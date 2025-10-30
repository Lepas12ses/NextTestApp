"use client";

import Image from "next/image";
import type { FC } from "react";
import useProductDetails from "./useProductDetails";
import Link from "next/link";

interface ProductDetailsProps {
	id: string;
}

const ProductDetails: FC<ProductDetailsProps> = ({ id }) => {
	const product = useProductDetails(id);

	return (
		<div className='flex flex-col gap-3'>
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
			<Link
				className={`bg-purple-500 text-white font-bold 
								py-1 px-2 rounded-md w-fit`}
				href='..'
			>
				Назад
			</Link>
		</div>
	);
};

export default ProductDetails;
