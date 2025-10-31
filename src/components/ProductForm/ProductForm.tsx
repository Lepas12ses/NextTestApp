"use client";

import { useAppDispatch } from "@/src/store";
import { createProduct } from "@/src/store/products";
import { redirect } from "next/navigation";
import type { FC } from "react";
import { FieldValues, useForm } from "react-hook-form";

const ProductForm: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const dispatch = useAppDispatch();

	function onSubmit(data: FieldValues) {
		dispatch(
			createProduct({
				title: data.title,
				description: data.description,
				price: +data.price,
			})
		);
		redirect("/products");
	}

	return (
		<form
			className='flex flex-col gap-3 w-150'
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className='flex flex-col'>
				<label className='font-semibold' htmlFor='title'>
					Заголовок
				</label>
				<input
					className='bg-stone-100 border-b-2 border-stone-200'
					id='title'
					{...register("title", { required: true })}
				/>
				{errors.title && <p>Заголовок не может быть пустым.</p>}
			</div>
			<div className='flex flex-col'>
				<label className='font-semibold' htmlFor='description'>
					Описание
				</label>
				<textarea
					className='bg-stone-100 border-b-2 border-stone-200'
					id='description'
					rows={5}
					{...register("description", { required: true })}
				/>
				{errors.description && <p>Описание не может быть пустым.</p>}
			</div>
			<div className='flex flex-col'>
				<label className='font-semibold' htmlFor='price'>
					Цена
				</label>
				<input
					className='bg-stone-100 border-b-2 border-stone-200'
					id='price'
					{...register("price", { required: true, pattern: /^\d+(\.\d+)?$/ })}
				/>
				{errors.price && <p>Укажите цену.</p>}
			</div>
			<button
				className='bg-purple-500 text-white font-bold 
							py-1 px-2 rounded-md w-fit cursor-pointer
                            mx-auto'
			>
				Создать
			</button>
		</form>
	);
};

export default ProductForm;
