import Link from "next/link";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<header
				className={`bg-purple-200 flex justify-start mb-5
							p-2`}
			>
				<Link
					className={`bg-purple-500 text-white font-bold 
								py-1 px-2 rounded-md`}
					href='..'
				>
					Назад
				</Link>
			</header>
			{children}
		</>
	);
}
