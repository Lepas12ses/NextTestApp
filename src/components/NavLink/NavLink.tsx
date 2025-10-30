"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC, PropsWithChildren } from "react";

interface NavLink extends PropsWithChildren {
	href: string;
}

const NavLink: FC<NavLink> = ({ href, children }) => {
	const pathname = usePathname();

	return (
		<Link className={`${href === pathname ? "underline" : ""}`} href={href}>
			{children}
		</Link>
	);
};

export default NavLink;
