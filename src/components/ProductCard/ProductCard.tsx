import Product from "@/src/schema/Product";
import Image from "next/image";
import Link from "next/link";
import type { FC, MouseEvent, MouseEventHandler } from "react";

import trashIcon from "@/src/assets/icons/trash.svg";
import { useAppDispatch } from "@/src/store";
import { deleteProduct } from "@/src/store/products";

interface ProductCardProps {
	product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
	const dispatch = useAppDispatch();

	function handleDelete(e: MouseEvent) {
		e.preventDefault();

		dispatch(deleteProduct(product.id));
	}

	return (
		<Link
			href={`/${product.id}`}
			className={`bg-stone-300 w-50 flex flex-col 
                        gap-4 rounded-lg overflow-hidden relative`}
		>
			<div className='h-36 bg-stone-100 p-3 m-3 rounded-xl'>
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
			<div
				className={`flex flex-col justify-between bg-stone-100 
                            rounded-t-lg h-30 p-2`}
			>
				<p className={`line-clamp-2`}>{product.title}</p>
				<p className='font-semibold text-lg'>${product.price}</p>
			</div>
			<div className={`flex gap-3 absolute right-1 top-1`}>
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
