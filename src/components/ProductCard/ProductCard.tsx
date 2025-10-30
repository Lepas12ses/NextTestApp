import Product from "@/src/schema/Product";
import Image from "next/image";
import type { FC } from "react";

interface ProductCardProps {
	product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
	return (
		<div
			className={`bg-stone-300 w-50 flex flex-col 
                        gap-4 rounded-lg overflow-hidden`}
		>
			<div className='h-36 bg-stone-100 p-3 m-3 rounded-xl'>
				<div className='relative h-full'>
					<Image
						src={product.image}
						alt={product.title}
						fill
						objectFit='contain'
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
		</div>
	);
};

export default ProductCard;
