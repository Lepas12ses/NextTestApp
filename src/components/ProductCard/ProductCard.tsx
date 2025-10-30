"use client";

import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";

import trashIcon from "@/src/assets/icons/trash.svg";
import useProductCard from "./useProductCard";

interface ProductCardProps {
	productId: number;
	title: string;
	price: number;
	image: string;
}

const ProductCard: FC<ProductCardProps> = ({
	productId,
	title,
	price,
	image,
}) => {
	const { isLiked, handleDelete, handleLike } = useProductCard(productId);

	return (
		<Link
			href={`/${productId}`}
			className={`bg-stone-300 w-50 flex flex-col 
                        gap-4 rounded-lg overflow-hidden relative`}
		>
			<div className='h-36 bg-stone-100 p-3 m-3 rounded-xl'>
				<div className='relative h-full'>
					<Image
						className='object-contain'
						src={image}
						alt={title}
						sizes='30vw'
						fill
					/>
				</div>
			</div>
			<div
				className={`flex flex-col justify-between bg-stone-100 
                            rounded-t-lg h-30 p-2`}
			>
				<p className={`line-clamp-2`}>{title}</p>
				<p className='font-semibold text-lg'>${price}</p>
			</div>
			<div className={`flex gap-1 absolute right-1 top-1`}>
				<button
					onClick={handleLike}
					className={`cursor-pointer bg-stone-50 rounded-full w-8 
								aspect-square flex justify-center items-center 
								border border-red-300`}
				>
					<svg
						className={isLiked ? "fill-red-900" : "fill-black"}
						width='24px'
						height='24px'
						viewBox='0 0 12 12'
						xmlSpace='preserve'
						xmlns='http://www.w3.org/2000/svg'
						xmlnsXlink='http://www.w3.org/1999/xlink'
					>
						<path d='M8.5,1C7.5206299,1,6.6352539,1.4022217,6,2.0504761C5.3648071,1.4022827,4.4793701,1,3.5,1  C1.5670166,1,0,2.5670166,0,4.5S2,8,6,11c4-3,6-4.5670166,6-6.5S10.4329834,1,8.5,1z' />
					</svg>
				</button>
				<button
					onClick={handleDelete}
					className={`cursor-pointer bg-red-100 rounded-full w-8 
								aspect-square flex justify-center border border-red-400`}
				>
					<Image className='stroke-red-200' src={trashIcon} alt='Trash icon' />
				</button>
			</div>
		</Link>
	);
};

export default ProductCard;
